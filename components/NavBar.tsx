/*
 * Project : thameem.me
 * Filename : NavBar.tsx
 * Author : thameem
 * Modified time : Sun, 15 Jan 2023 at 8:54 pm India Standard Time
 */

import {useRouter} from "next/router";
import React from "react";
import NextLink from "next/link";
import cn from 'classnames';
import Image from "next/image";
import constants from "./Constants";

function NavItem({href, text}: { href: any, text: any }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <NextLink
            href={href}
            className={cn(
                isActive
                    ? 'font-semibold'
                    : 'font-normal',
                'mr-3'
            )}
        >
            <span>{text}</span>

        </NextLink>
    );
}

function NavBar() {
    return (
        <>
            <nav className="flex items-center justify-between">

                <div className="float-left">

                    <NavItem href="/" text="Home"/>
                    <NavItem href="/about" text="About"/>
                    <NavItem href="/blog" text="Blog"/>
                    <NavItem href="/contact" text="Contact"/>
                </div>

                <a
                    href={constants.github}
                    rel="noreferrer"
                    target="_blank"
                    className="w-9 h-9 rounded-lg hover:ring-2 ring-gray-300 float-right"
                >
                    <Image width="100" height="100" src="static/images/logo/github-mark.svg" alt="GitHub Logo"/>

                </a>
            </nav>

        </>
    )
}

export default NavBar

