/*
 * Project : thameem.me
 * Filename : contact.ts
 * Author : thameem
 * Modified time : Wed, 18 Jan 2023 at 11:01 pm India Standard Time
 */


import Container from "../components/Container";
import React, {useState} from "react";


function Contact() {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const clearResponse = (event: any) => {
        event.preventDefault();
        setSuccess(false)
        setError(false)
    }


    function onResponseShowMessage(success: boolean, message: string) {
        if (success) {
            setSuccess(true)
            setError(false)
        } else {
            setSuccess(false)
            setError(true)
        }

        setLoading(false)

    }

    const saveToSheet = (event: any) => {

        event.preventDefault();
        setLoading(true)

        const target = event.target as typeof event.target & {
            subject: { value: string };
            message: { value: string };
        };

        fetch('/api/send_email', {
            method: 'POST',
            body: JSON.stringify({
                subject: target.subject.value,
                message: target.message.value
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            if (response.status == 200) {
                onResponseShowMessage(true, 'success')
            } else {
                onResponseShowMessage(false, 'error')
            }
        }).catch(
            err => onResponseShowMessage(false, err)
        )
    }

    return (
        <Container title={"Contact - Thameem Karakkoth"}>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Get in touch</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
                    share your thoughts anonymously 👋👋
                </p>
                {
                    error ?
                        <div
                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2 mb-2"
                            role="alert">
                            <strong className="font-bold">Error! </strong>
                            <span className="block sm:inline">Some error has occurred.</span>
                            <button onClick={clearResponse} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <svg className="fill-current h-6 w-6 text-red-500" role="button"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <title>Close</title>
                                    <path
                                        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                                </svg>
                            </button>
                        </div> : null
                }
                {
                    success ?
                        <div
                            className="response_del bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-2 mb-2"
                            role="alert">
                            <strong className="font-bold">Success! </strong>
                            <span className="block sm:inline">Your message has sent successfully.</span>
                            <button onClick={clearResponse} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <svg className="fill-current h-6 w-6 text-green-500" role="button"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <title>Close</title>
                                    <path
                                        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                                </svg>
                            </button>
                        </div> : null
                }
                <form onSubmit={saveToSheet} name="contact_form" className="space-y-8">
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input type="text" id="subject"
                               name="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                               placeholder="Let me know how I can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900">Your
                            message</label>
                        <textarea id="message"
                                  name="message"
                                  rows={6}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                  placeholder="Leave a comment..." required></textarea>
                    </div>
                    <input type="submit"
                           value={loading ? "Sending..." : "Send message"}
                           className="bg-blue-800 text-white py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                    </input>
                </form>
            </div>
        </Container>
    )
}

export default Contact