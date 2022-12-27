/*
 * Project : thameem.me
 * Filename : index.tsx
 * Author : thameem
 * Modified time : Tue, 27 Dec 2022 at 12:07 am India Standard Time
 */

import Container from "../components/Container";
import React from "react";
import BlogPostCard from "../components/BlogPostCard";
import Link from "next/link";

export default function Home() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
                    Thameem Karakkoth
                </h1>
                <h2 className="text-gray-200 mb-4">
                    Product Engineer at{' '}
                    <span className="font-semibold">UST</span>
                </h2>
                <div className="mb-8">
                    <p className="text-gray-400 mb-4 text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the
                    </p>
                </div>
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-white">
                    Recent Posts
                </h3>
                <div className="flex gap-12 flex-col md:flex-row">
                    <BlogPostCard/>
                    <BlogPostCard/>
                    <BlogPostCard/>
                </div>
                <Link
                    href="/"
                    className="flex items-center mt-8 text-gray-400 leading-7 rounded-lg hover:text-gray-200  transition-all h-6"
                >
                    <>
                        {'Read all blogs'}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 ml-1"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                            />
                        </svg>
                    </>
                </Link>
            </div>
        </Container>
    )
}
