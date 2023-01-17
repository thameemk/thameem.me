/*
 * Project : thameem.me
 * Filename : Container.tsx
 * Author : thameem
 * Modified time : Sun, 15 Jan 2023 at 5:08 pm India Standard Time
 */

import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import meta from "./Meta";

function Container(props: any) {
    const {children} = props;
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta name="keywords" content={meta.keywords}/>

                <meta property="og:site_name" content={meta.site_name}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>

                <link rel="shortcut icon" href="/favicon.png"/>

            </Head>
            <main className={"mx-auto max-w-3xl py-10 px-10"}>
                <NavBar/>
                {children}
                <Footer/>
            </main>
        </>
    )
}

export default Container
