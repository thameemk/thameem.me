/*
 * Project : thameem.me
 * Filename : send_email.tsx
 * Author : thameem
 * Modified time : Sun, 22 Jan 2023 at 7:37 pm India Standard Time
 */


import type {NextApiRequest, NextApiResponse} from 'next'


async function verifyGoogleRecaptcha(recaptchatoken: any) {

    let response = await fetch('https://www.google.com/recaptcha/api/siteverify',
        {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${recaptchatoken}`,
        })
    return await response.json()
}


type Data = {
    success: boolean
    message: String
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method !== 'POST') {
        res.status(405).send({success: false, message: 'Only POST requests allowed'})
        return
    }

    if (!req.body.message || !req.body.subject) {
        res.status(400).json({success: false, message: 'Fill all fields'})
        return
    }


    verifyGoogleRecaptcha(req.headers.recaptchatoken).then(recaptchaResponse => {
        if (recaptchaResponse.success == true) {
            const scriptUrl: any = process.env.GOOGLE_APP_SCRIPT_WEB_APP_URL;

            const data = new FormData()

            data.append("subject", req.body.subject);
            data.append("message", req.body.message);


            fetch(scriptUrl, {
                method: 'POST',
                body: data,

            }).then(response => {
                    if (response.status == 200) {
                        res.status(200).json({success: true, message: 'Your message has sent successfully'})

                    } else {
                        res.status(response.status).json({success: false, message: 'Some error has occurred.'})
                    }
                }
            )
        } else {
            res.status(200).json({success: false, message: 'Google ReCaptcha Failure.'})
        }
    });


}