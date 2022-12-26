import Container from "../components/Container";
import React from "react";
import BlogPostCard from "../components/BlogPostCard";

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
            </div>
        </Container>
    )
}
