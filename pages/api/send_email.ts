/*
 * Project : thameem.me
 * Filename : send_email.tsx
 * Author : thameem
 * Modified time : Sun, 22 Jan 2023 at 7:37 pm India Standard Time
 */


import type { NextApiRequest, NextApiResponse } from 'next';
import verifyGoogleRecaptcha from '../../libs/google_recaptcha';
import EmailResponse from '../../types/email';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<EmailResponse>
) {

    if (req.method !== 'POST') {
        res.status(405).send({ success: false, message: 'Only POST Requests Allowed' })
        return
    }

    if (!req.body.message || !req.body.subject) {
        res.status(400).json({ success: false, message: 'Fill All Fields' })
        return
    }

    let recaptchaResponse = await verifyGoogleRecaptcha(req.headers.recaptchatoken)

    if (recaptchaResponse.success != true) {
        res.status(200).json({ success: false, message: 'Google ReCaptcha Failure.' })
        return
    }

    const scriptUrl: any = process.env.GOOGLE_APP_SCRIPT_WEB_APP_URL;

    const data = new FormData()

    data.append("subject", req.body.subject);
    data.append("message", req.body.message);


    fetch(scriptUrl, {
        method: 'POST',
        body: data,

    }).then(response => {
        if (response.status == 200) {
            res.status(200).json({ success: true, message: 'Your message has sent successfully' })

        } else {
            res.status(response.status).json({ success: false, message: 'Some error has occurred.' })
        }
    }
    )

}