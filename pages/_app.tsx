/*
 * Project : thameem.me
 * Filename : _app.tsx
 * Author : thameem
 * Modified time : Sun, 15 Jan 2023 at 4:46 pm India Standard Time
 */

import '../styles/global.css'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}
