/*
 * Project : thameem.me
 * Filename : _app.tsx
 * Author : thameem
 * Modified time : Sat, 26 Nov 2022 at 3:11 pm India Standard Time
 */

import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
