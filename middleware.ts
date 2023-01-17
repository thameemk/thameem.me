/*
 * Project : thameem.me
 * Filename : middleware.ts
 * Author : thameem
 * Modified time : Tue, 27 Dec 2022 at 9:41 pm India Standard Time
 */

import {NextRequest, NextResponse} from 'next/server'

export const config = {
    matcher: ['/', '/index'],
}

export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('authorization')
    const url = req.nextUrl

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1]
        const [user, pwd] = atob(authValue).split(':')

        if (user === 'admin' && pwd === 'admin@123') {
            return NextResponse.next()
        }
    }
    // url.pathname = '/api/auth'

    return NextResponse.rewrite(url)
}
