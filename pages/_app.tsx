/*
 * Project : thameem.me
 * Filename : _app.tsx
 * Author : thameem
 * Modified time : Sun, 15 Jan 2023 at 4:46 pm India Standard Time
 */

import "../styles/global.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "epledn6gyn");
        `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BFR3PPNSB4"
      ></Script>
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
  );
}
