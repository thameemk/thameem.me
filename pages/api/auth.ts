/*
 * Project : thameem.me
 * Filename : auth.ts
 * Author : thameem
 * Modified time : Tue, 27 Dec 2022 at 9:59 pm India Standard Time
 */

/*
 * Project : thameem.me
 * Filename : auth.ts
 * Author : thameem
 * Modified time : Tue, 27 Dec 2022 at 9:59 pm India Standard Time
 */

import type {NextApiRequest, NextApiResponse} from 'next'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"')
    res.statusCode = 401
    res.end(`Auth Required.`)
}
