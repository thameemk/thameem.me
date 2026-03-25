/*
 * Project : thameem.me
 * Filename : contact.ts
 * Author : thameem
 * Modified time : Wed, 18 Jan 2023 at 11:01 pm India Standard Time
 */

import Container from "../components/Container";
import React, { useState } from "react";
import Alerts, { AlertType } from "../components/Alerts";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(AlertType.error);
    const [messageTitle, setMessageTitle] = useState("");
    const [alert, setAlert] = useState(false);
    const recaptchaRef: any = React.createRef();

    const clearResponse = (event: any) => {
        event.preventDefault();
        setAlert(false);
    };

    function onResponseShowMessage(success: boolean, message: string) {
        setMessage(message);
        if (success) {
            setMessageType(AlertType.success);
            setMessageTitle("Success! ");
        } else {
            setMessageType(AlertType.error);
            setMessageTitle("Error! ");
        }
        setAlert(true);
        setLoading(false);
    }

    const submitContactForm = (event: any) => {
        event.preventDefault();
        setLoading(true);

        const target = event.target as typeof event.target & {
            subject: { value: string };
            message: { value: string };
        };

        const recaptchaValue = recaptchaRef.current.getValue();

        if (!recaptchaValue) {
            onResponseShowMessage(false, "Failed To Retrieve ReCaptcha Token.");
            return;
        }

        fetch("/api/send_email", {
            method: "POST",
            body: JSON.stringify({
                subject: target.subject.value,
                message: target.message.value,
            }),
            headers: {
                "Content-Type": "application/json",
                recaptchaToken: recaptchaValue,
            },
        })
            .then((response) => {
                response.json().then((data) => {
                    onResponseShowMessage(data.success, data.message);
                });
            })
            .catch((err) => onResponseShowMessage(false, err));
    };

    const recaptcha_key: any = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

    return (
        <Container title={"Contact - Thameem Karakkoth"}>
            <div className="mt-10 flex flex-col gap-8">

                <div>
                    <h1 className="font-black text-2xl md:text-4xl mb-2">Get in touch</h1>
                    <p className="text-gray-400 text-sm">Send a message anonymously — I'll get back to you.</p>
                </div>

                {alert && (
                    <Alerts
                        action={clearResponse}
                        title={messageTitle}
                        subtitle={message}
                        alert_type={messageType}
                    />
                )}

                <form onSubmit={submitContactForm} name="contact_form" className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="What's on your mind?"
                            required
                            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Leave a message..."
                            required
                            className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                        />
                    </div>

                    <ReCAPTCHA sitekey={recaptcha_key} ref={recaptchaRef} />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-fit px-6 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-xl hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {loading ? "Sending..." : "Send message"}
                    </button>
                </form>
            </div>
        </Container>
    );
}

export default Contact;
