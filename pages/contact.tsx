/*
 * Project : thameem.me
 * Filename : contact.ts
 * Author : thameem
 * Modified time : Wed, 18 Jan 2023 at 11:01 pm India Standard Time
 */


import Container from "../components/Container";

function Contact() {
    return (
        <Container title={"Contact - Thameem Karakkoth"}>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Get in touch</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
                    share your thoughts anonymously
                </p>
                <form action="#" className="space-y-8">

                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                               placeholder="Let us know how I can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900">Your
                            message</label>
                        <textarea id="message" rows={6}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                  placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit"
                            className="bg-blue-800 text-white py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send
                        message
                    </button>
                </form>
            </div>
        </Container>
    )
}

export default Contact