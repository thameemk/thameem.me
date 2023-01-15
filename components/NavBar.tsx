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
                'p-1'
            )}
        >
            <span>{text}</span>

        </NextLink>
    );
}

function NavBar() {
    return (
        <div>
            <NavItem href="/" text="Home"/>
            <NavItem href="/about" text="About"/>
            <NavItem href="/blog" text="Blog"/>
            <NavItem href="/contact" text="Contact"/>
        </div>
    )
}

export default NavBar

