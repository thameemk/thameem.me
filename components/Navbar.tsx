/*
 * Project : thameem.me
 * Filename : Navbar.tsx
 * Author : thameem
 * Modified time : Mon, 26 Dec 2022 at 11:24 pm India Standard Time
 */

import cn from "classnames";
import NextLink from 'next/link';
import {useRouter} from "next/router";
import React from "react";
import MobileMenu from "./MobileMenu";

function NavItem({href, text}: { href: any, text: string }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <NextLink
            href={href}
            className={cn(
                isActive
                    ? 'font-semibold text-gray-200'
                    : 'font-normal text-gray-400',
                'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-800  transition-all'
            )}
        >
            <span className="capsize">{text}</span>
        </NextLink>
    );
}


function Navbar() {
    return (
        <div className="flex flex-col justify-center px-8">
            <nav
                className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16  ">

                <div className="ml-[-0.60rem]">
                    <MobileMenu/>
                    <NavItem href="/" text="home"/>
                    <NavItem href="/" text="about"/>
                    <NavItem href="/" text="blog"/>
                    <NavItem href="/" text="contact"/>
                </div>
                <a
                    href={"/"}
                    className="w-9 h-9 "
                >
                    <img src={"static/images/logo/github-mark-white.svg"} alt={"GitHub Logo"}/>
                </a>
            </nav>
        </div>
    )
}

export default Navbar