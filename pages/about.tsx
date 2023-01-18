/*
 * Project : thameem.me
 * Filename : about.tsx
 * Author : thameem
 * Modified time : Tue, 17 Jan 2023 at 8:26 pm India Standard Time
 */


import Container from "../components/Container";
import React from "react";
import Link from "next/link";

function About() {
    return (
        <Container title={"About - Thameem Karakkoth"}>
            <div className="border-b border-gray-00 mb-10 mt-10">
                <h2 className="font-black text-2xl md:text-4xl mb-3">About</h2>

                <p className="text-gray-700 mb-10 text-wrapper">
                    Hi, I'm Thameem, a passionate developer, currently working as a Product Engineer at UST.
                    <br/><br/>
                    I have completed my undergraduate in Electronics and communication engineering from TKM College of
                    Engineering.
                    <br/><br/>
                    I love to work on various modern platforms and learn cutting-edge technologies in software
                    engineering, design & architecture, cyber security, etc.
                    <br/><br/>
                    I enjoy contributing to society. During my graduation, I got selected for the Microsoft student
                    partner program, which helps fellow students to develop their technical and career skills for the
                    future.
                    <br/><br/>
                    I have also volunteered as the webmaster of IEEE, the world's largest professional organisation for
                    engineers and as the chief executive officer of the innovation and entrepreneurship cell (IEDC).
                    <br/><br/>
                    IEDC is working under the guidance of the Kerala Start-Up Mission, which aims to promote the
                    institutional vision of transforming youngsters into technological entrepreneurs and innovative
                    leaders.
                    <br/><br/>
                    <Link href="/contact">Get in touch 👋👋</Link>
                </p>
            </div>
        </Container>
    )
}

export default About
