/*
 * Project : thameem.me
 * Filename : about.tsx
 * Author : thameem
 * Modified time : Tue, 27 Dec 2022 at 12:07 am India Standard Time
 */

import Container from "../components/Container";
import React from "react";
import Link from "next/link";

const conferences = [
    {
        event: "PyCascades 2024",
        talk: "Building GraphQL microservices using FastAPI",
        href: "https://2024.pycascades.com/program/talks/building-graphql-microservices-using-fastapi/",
        description: (
            <>
                Spoke at PyCascades Seattle alongside{" "}
                <a className="text-blue-700 hover:underline" target="_blank" rel="noreferrer"
                   href="https://www.linkedin.com/in/abymjoseph">
                    Aby M Joseph
                </a>
                . Our session explored building GraphQL microservices using FastAPI &amp; Apollo GraphQL.
            </>
        ),
    },
    {
        event: "EuroPython 2023",
        talk: "PyGoat - Learn Django Security The Hard Way",
        href: "https://ep2023.europython.eu/session/pygoat-learn-django-security-the-hard-way",
        description: (
            <>
                Spoke at EuroPython 2023 alongside{" "}
                <a className="text-blue-700 hover:underline" target="_blank" rel="noreferrer"
                   href="https://adarshd.dev/">
                    Adarsh Divakaran
                </a>
                . We discussed PyGoat — an intentionally vulnerable Django app for teaching OWASP Top 10
                vulnerabilities.
            </>
        ),
    },
    {
        event: "IEEE Publication — Nov 2021",
        talk: "Detection of Parkinson's Disease Using Vocal Features: An Eigen Approach",
        href: "https://ieeexplore.ieee.org/document/9673634",
        description: (
            <>
                Published on IEEE Digital Explorer. Co-authored with{" "}
                <a className="text-blue-700 hover:underline" target="_blank" rel="noreferrer"
                   href="https://www.linkedin.com/in/dr-anzar-s-m-728949b2/">Dr Anzar SM</a>,{" "}
                <a className="text-blue-700 hover:underline" target="_blank" rel="noreferrer"
                   href="https://www.linkedin.com/in/nakul-s-pramod-6ba2041a0/">Nakul S Pramod</a>,{" "}
                <a className="text-blue-700 hover:underline" target="_blank" rel="noreferrer"
                   href="https://www.linkedin.com/in/swathy-mohanlal-b94246198/">Swathy Mohanlal</a>, and{" "}
                <a className="text-blue-700 hover:underline" target="_blank" rel="noreferrer"
                   href="https://www.linkedin.com/in/sajitha-l-739036182/">Sajitha L</a>.
            </>
        ),
    },
];

const community = [
    {
        role: "Team Lead / CEO",
        org: "IEDC TKMCE",
        description:
            "Managed operations for the Innovation & Entrepreneurship Development Centre, acting as the bridge between Kerala Startup Mission (KSUM), faculty, and industry leaders to foster a campus-wide culture of innovation.",
    },
    {
        role: "Microsoft Learn Student Ambassador",
        org: "Microsoft",
        description:
            "Organized technical workshops covering web development, Azure, backend engineering, and machine learning. Spearheaded hackathons and competitive programming events to help students build future-ready skills.",
    },
    {
        role: "Web Administrator & App Head",
        org: "IEEE · IEDC · Hestia 2020",
        description:
            "Lead webmaster across multiple organizations. Designed and deployed full-stack event management systems using CodeIgniter and MySQL, handling payment gateways, spot registrations, and automated certificate generation for thousands of participants.",
    },
];

function About() {
    return (
        <Container title={"About - Thameem Karakkoth"}>
            <div className="mt-10 flex flex-col gap-12">

                {/* Hero */}
                <section className="border-b border-gray-200 pb-10">
                    <h1 className="font-black text-2xl md:text-4xl mb-6">About Me</h1>
                    <div className="flex flex-col gap-3">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Hi, I'm Thameem, a Backend Product Engineer based in Kerala. I focus on building scalable
                            architectures, finding practical ways to integrate AI, and designing resilient backend
                            systems that hold up when traffic spikes
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            With deep expertise across languages like Python, PHP, Rust, and JavaScript, paired with
                            frameworks including Django, FastAPI, React, and CodeIgniter, I specialize in transforming
                            complex technical challenges into robust, high-performance solutions. Beyond writing code, I
                            am an active conference speaker, a published researcher, and a dedicated community builder.
                        </p>
                        <Link href="/resume" target="_blank"
                              className="inline-flex items-center gap-1 text-sm text-blue-700 font-medium hover:text-blue-900 transition-colors pt-1">
                            View Resume <span>→</span>
                        </Link>
                    </div>
                </section>

                {/* Experience */}
                <section className="border-b border-gray-200 pb-10">
                    <h2 className="font-black text-2xl md:text-3xl mb-2">Professional Experience</h2>
                    <p className="text-gray-400 text-sm mb-6">I thrive at the intersection of product development and
                        cutting-edge backend engineering.</p>

                    <div className="relative">
                        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 hidden sm:block"/>
                        <div className="flex flex-col gap-6">
                            {[
                                {
                                    current: true,
                                    title: "Product Engineer – Backend",
                                    company: "Entri App",
                                    period: "May 2025 – Present",
                                    body: "Currently building and maintaining scalable web applications while driving Entri's AI initiatives. I leverage LLMs and RAG architectures to enhance personalization and automate learning outcomes. Recognized with the Entripreneur award for showcasing Entri's AI features at Google I/O.",
                                },
                                {
                                    current: false,
                                    title: "Associate III Product Engineer – Backend",
                                    company: "UST Global / Strollby",
                                    period: "Jul 2021 – May 2025",
                                    body: "Led backend engineering for two key business verticals. Architected Python-based microservices using Falcon, FastAPI, and GraphQL, and built massive data ingestion pipelines handling 120M+ records using distributed parallel processing and NATS. Championed CI/CD workflows with Docker, Kubernetes, and Terraform, and built automated testing frameworks from scratch. Recognized with the UST Shooting Star Award.",
                                },
                            ].map((exp) => (
                                <div key={exp.title} className="sm:pl-8 relative">
                                    <div
                                        className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-gray-300 bg-white hidden sm:flex items-center justify-center">
                                        {exp.current && <div className="w-[7px] h-[7px] rounded-full bg-blue-600"/>}
                                    </div>
                                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                                        <div
                                            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                                            <h3 className="font-bold text-base text-gray-900">{exp.title}</h3>
                                            <span className="text-gray-400 text-sm shrink-0 sm:ml-4">{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-blue-700 font-semibold text-sm">{exp.company}</span>
                                            {exp.current && (
                                                <span
                                                    className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium border border-blue-100">Current</span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{exp.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Conferences & Publications */}
                <section className="border-b border-gray-200 pb-10">
                    <h2 className="font-black text-2xl md:text-3xl mb-2">Conferences & Publications</h2>
                    <p className="text-gray-400 text-sm mb-6">Learning in public and sharing knowledge with the global
                        developer community.</p>

                    <div className="flex flex-col gap-4">
                        {conferences.map((c) => (
                            <div key={c.event} className="rounded-xl border border-gray-200 bg-white p-5">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                                    <h3 className="font-bold text-sm text-gray-900">{c.talk}</h3>
                                    <span className="text-gray-400 text-xs shrink-0 sm:ml-4">{c.event}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{c.description}</p>
                                <a href={c.href} target="_blank" rel="noreferrer"
                                   className="inline-flex items-center gap-1 text-sm text-blue-700 font-medium hover:text-blue-900 transition-colors">
                                    Read more <span>→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Community */}
                <section className="pb-10">
                    <h2 className="font-black text-2xl md:text-3xl mb-2">Community & Leadership</h2>
                    <p className="text-gray-400 text-sm mb-6">Where it all started — at TKM College of Engineering.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {community.map((c) => (
                            <div key={c.role}
                                 className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col gap-2">
                                <div>
                                    <h3 className="font-bold text-sm text-gray-900">{c.role}</h3>
                                    <span className="text-blue-700 font-semibold text-xs">{c.org}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </Container>
    );
}

export default About;
