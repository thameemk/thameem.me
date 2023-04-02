/*
 * Project : thameem.me
 * Filename : contact.ts
 * Author : thameem
 * Modified time : Wed, 18 Jan 2023 at 11:01 pm India Standard Time
 */

import Container from "../components/Container";
import React, {useRef, useState} from "react";
import Alerts, {AlertType} from "../components/Alerts";
import Script from "next/script";
import reCAPTCHA from "react-google-recaptcha";

function Contact() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(AlertType.error);
    const [messageTitle, setMessageTitle] = useState("");
    const [alert, setAlert] = useState(false);

    const recaptchaRef = useRef(null)
    const recaptcha_key: any = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY


    const clearResponse = (event: any) => {
        event.preventDefault();
        setAlert(false);
    };

    function onResponseShowMessage(success: boolean, message: string) {
        setMessage(message);
        if (success) {
            setMessageType(AlertType.success)
            setMessageTitle("Success! ")
        } else {
            setMessageType(AlertType.error)
            setMessageTitle("Error! ")
        }
        setAlert(true);
        setLoading(false);
    }


    const submitContactForm = (event: any) => {
        event.preventDefault();
        const captchaToken = recaptchaRef.current.execute();
        recaptchaRef.current.reset();
        setLoading(true);

        const target = event.target as typeof event.target & {
            subject: { value: string };
            message: { value: string };
        };


        fetch("/api/send_email", {
            method: "POST",
            body: JSON.stringify({
                subject: target.subject.value,
                message: target.message.value,
            }),
            headers: {
                "Content-Type": "application/json",
                "recaptchaToken": captchaToken
            },
        })
            .then((response) => {
                response.json().then((data) => {
                    onResponseShowMessage(data.success, data.message)
                })
            })
            .catch((err) => onResponseShowMessage(false, err));


    };


    return (

        <Container title={"Contact - Thameem Karakkoth"}>
            <Script src="https://www.google.com/recaptcha/api.js"></Script>


            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Get in touch
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
                    share your thoughts anonymously 👋👋
                </p>

                {alert && (
                    <Alerts
                        action={clearResponse}
                        title={messageTitle}
                        subtitle={message}
                        alert_type={messageType}
                    />
                )}

                <form onSubmit={submitContactForm} name="contact_form" className="space-y-8">
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Let me know how I can help you"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Leave a comment..."
                            required
                        ></textarea>
                    </div>
                    <reCAPTCHA
                        sitekey={recaptcha_key}
                        ref={recaptchaRef}
                        size="invisible"
                    />
                    {/*<div className="g-recaptcha" data-sitekey={recaptcha_key}></div>*/}
                    <input
                        type="submit"
                        value={loading ? "Sending..." : "Send message"}
                        className="bg-blue-800 text-white py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                    ></input>
                </form>
            </div>
        </Container>
    );
}

export default Contact;
