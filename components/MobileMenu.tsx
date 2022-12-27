/*
 * Project : thameem.me
 * Filename : MobileMenu.tsx
 * Author : thameem
 * Modified time : Mon, 26 Dec 2022 at 12:12 am India Standard Time
 */

import cn from 'classnames';
import useDelayedRender from 'use-delayed-render';
import {useState, useEffect} from 'react';
import styles from 'styles/MobileMenu.module.css';
import NextLink from "next/link";


function MobileNavItem({href, text}: { href: any, text: string }) {

    return (
        <NextLink
            href={href}
            className={
                "border-b border-gray-700 text-gray-100 text-sm font-semibold"
            }
        >
            <span className="flex w-auto pb-4">{text}</span>
        </NextLink>
    );
}

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {mounted: isMenuMounted, rendered: isMenuRendered} = useDelayedRender(
        isMenuOpen,
        {
            enterDelay: 20,
            exitDelay: 300
        }
    );

    function toggleMenu() {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
        } else {
            setIsMenuOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }

    useEffect(() => {
        return function cleanup() {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <button
                className={cn(styles.burger, 'visible md:hidden')}
                aria-label="Toggle menu"
                type="button"
                onClick={toggleMenu}
            >
                <MenuIcon data-hide={isMenuOpen}/>
                <CrossIcon data-hide={!isMenuOpen}/>
            </button>
            {isMenuMounted && (
                <ul
                    className={cn(
                        styles.menu,
                        'flex flex-col absolute bg-black',
                        isMenuRendered && styles.menuRendered
                    )}
                >
                    <MobileNavItem href={"/"} text={"home"}/>
                    <MobileNavItem href={"/"} text={"about"}/>
                    <MobileNavItem href={"/"} text={"blog"}/>
                    <MobileNavItem href={"/"} text={"contact"}/>
                </ul>
            )}
        </>
    );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg
            className="h-5 w-5 absolute text-gray-100"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M2.5 7.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.5 12.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.5 17.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg
            className="h-5 w-5 absolute text-gray-100"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
            {...props}
        >
            <path d="M18 6L6 18"/>
            <path d="M6 6l12 12"/>
        </svg>
    );
}
