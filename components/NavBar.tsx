/*
 * Project : thameem.me
 * Filename : NavBar.tsx
 * Author : thameem
 * Modified time : Sun, 15 Jan 2023 at 8:54 pm India Standard Time
 */

import { useRouter } from "next/router";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import constants from "../libs/constants";

function NavItem({ href, text }: { href: string; text: string }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <NextLink
            href={href}
            className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                    ? "font-semibold text-gray-900 bg-gray-100"
                    : "font-normal text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            }`}
        >
            {text}
        </NextLink>
    );
}

function NavBar() {
    return (
        <nav className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
                <NavItem href="/" text="Home" />
                <NavItem href="/about" text="About" />
                <NavItem href="/contact" text="Contact" />
            </div>

            <a
                href={constants.github}
                rel="noreferrer"
                target="_blank"
                className="w-7 h-7 opacity-60 hover:opacity-100 transition-opacity"
            >
                <Image
                    width="28"
                    height="28"
                    src={process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL + "thameem.me/logos/github-mark.svg"}
                    alt="GitHub"
                />
            </a>
        </nav>
    );
}

export default NavBar;
