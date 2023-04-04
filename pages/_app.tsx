/*
 * Project : thameem.me
 * Filename : _app.tsx
 * Author : thameem
 * Modified time : Sun, 15 Jan 2023 at 4:46 pm India Standard Time
 */

import "../styles/global.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showRecaptcha, setShowRecaptcha] = useState(false);

  useEffect(() => {
    setShowRecaptcha(router.pathname === "/contact");
  }, [router.pathname]);

  const recaptcha_key: any = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

  return (
    <>
      {showRecaptcha ? (
        <GoogleReCaptchaProvider
          reCaptchaKey={recaptcha_key}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        >
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
        </GoogleReCaptchaProvider>
      ) : (
        <>
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
      )}
    </>
  );
}
