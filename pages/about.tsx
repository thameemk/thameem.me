/*
 * Project : thameem.me
 * Filename : about.tsx
 * Author : thameem
 * Modified time : Tue, 17 Jan 2023 at 8:26 pm India Standard Time
 */


import Container from "../components/Container";
import React from "react";

function About() {
    return (
        <Container>
            <div className="border-b border-gray-00 mb-10 mt-10">
                <h2 className="font-black text-2xl md:text-4xl mb-3">About</h2>

                <p className="text-gray-700 mb-10 text-wrapper">
                    Hi, I'm Thameem, a passionate developer, currently working as a Product Engineer at UST.
                    <br/>
                    I have completed my undergraduate in Electronics and communication engineering from TKM College of
                    Engineering.
                    <br/>
                    Apart from working in various modern platforms, I'm passionate about learning cutting-edge
                    technologies in the field of software engineering, design & architecture, cyber security, etc.
                    <br/>
                </p>
            </div>
        </Container>
    )
}

export default About
