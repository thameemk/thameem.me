/*
 * Project : thameem.me
 * Filename : send_email.tsx
 * Author : thameem
 * Modified time : Sun, 22 Jan 2023 at 7:37 pm India Standard Time
 */


import type {NextApiRequest, NextApiResponse} from 'next'
import {useRef} from "react";

type Data = {
    success: boolean
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const scriptUrl: any = process.env.GOOGLE_APP_SCRIPT_WEB_APP_URL;

    fetch(scriptUrl, {
        method: 'POST',
        body: req.body,

    }).then(response => {
            if (response.status == 200) {
                res.status(200).json({success: true})

            } else {
                res.status(200).json({success: false})
            }
        }
    )
}