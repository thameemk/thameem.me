/*
 * Project : thameem.me
 * Filename : _app.tsx
 * Author : thameem
 * Modified time : Sun, 15 Jan 2023 at 4:46 pm India Standard Time
 */

import '../styles/global.css'
import type {AppProps} from 'next/app'
import Script from "next/script";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BFR3PPNSB4"></Script>
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-BFR3PPNSB4');
                `}
            </Script>
            <Component {...pageProps} />
            
       </>
    )
}
