/*
 * Project : thameem.me
 * Filename : email_handler.ts
 * Author : thameem
 * Modified time : Sat, 21 Jan 2023 at 2:28 pm India Standard Time
 */


export default {
    async fetch(request, env) {
        try {
            const {pathname} = new URL(request.url);

            if (pathname.startsWith("/contact_thameem_me")) {

                const request_body = await request.json();

                const data = {
                    subject: request_body.subject, message: request_body.message,
                };

                const json = JSON.stringify(data, null, 2);
                return new Response(json, {
                    headers: {
                        'content-type': 'application/json;charset=UTF-8',
                    },
                });

            }
            return fetch("https://welcome.developers.workers.dev");

        } catch (e) {
            let err;
            return new Response(err.stack, {status: 500})
        }
    }
}