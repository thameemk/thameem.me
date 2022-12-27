/*
 * Project : thameem.me
 * Filename : Container.tsx
 * Author : thameem
 * Modified time : Mon, 26 Dec 2022 at 10:45 pm India Standard Time
 */

import Head from "next/head";
import Navbar from "./Navbar";

const meta = {
    title: "Thameem Karakkoth - Developer with keen interest in cyber security",
    description: "Backend engineer, Full stack developer, Cyber security enthusiast",
    keywords: "Thameem Karakkoth, thameemk612",
    site_name: "Thameem Karakkoth"
}

// function NavItem({href, text}: { href: any, text: string }) {

function Container(props: any) {
    const {children} = props;
    return (
        <div className="bg-black">
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta name="keywords" content={meta.keywords}/>

                <meta property="og:site_name" content={meta.site_name}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>
            </Head>
            <Navbar/>
            <main
                className={"flex flex-col justify-center px-8"}
            >
                {children}
            </main>
        </div>
    )
}

export default Container