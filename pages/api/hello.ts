/*
 * Project : thameem.me
 * Filename : hello.ts
 * Author : thameem
 * Modified time : Tue, 27 Dec 2022 at 9:59 pm India Standard Time
 */

/*
 * Project : thameem.me
 * Filename : hello.ts
 * Author : thameem
 * Modified time : Sat, 26 Nov 2022 at 12:18 pm India Standard Time
 */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
