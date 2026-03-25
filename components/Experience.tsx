import React from "react";

interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    current?: boolean;
}

const experiences: ExperienceItem[] = [
    {
        title: "Product Engineer – Backend",
        company: "Entri App",
        location: "Kerala, IN",
        period: "May 2025 – Current",
        current: true,
        description:
            "Building scalable backend services with Django and FastAPI, and developing AI-powered features using LLMs and RAG to improve personalization and student learning outcomes. Recognized with the Entripreneur award for showcasing Entri's AI features at Google I/O.",
    },
    {
        title: "Associate III Product Engineer – Backend",
        company: "UST Global Inc | Strollby",
        location: "Kerala, IN",
        period: "Jul 2021 – May 2025",
        description:
            "Led backend engineering for two business verticals, building Python microservices with FastAPI and Falcon, processing 120M+ records through distributed pipelines, and managing CI/CD with Docker, Kubernetes, and Terraform. Recognized with the UST Shooting Star Award.",
    },
];

function Experience() {
    return (
        <section className="border-b border-gray-200 mb-10 pb-10">
            <h2 className="font-black text-2xl md:text-4xl mb-8">Experience</h2>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 hidden sm:block"/>

                <div className="flex flex-col gap-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="sm:pl-8 relative">
                            {/* Timeline dot */}
                            <div
                                className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-gray-300 bg-white hidden sm:flex items-center justify-center">
                                {exp.current && (
                                    <div className="w-[7px] h-[7px] rounded-full bg-blue-600"/>
                                )}
                            </div>

                            <div
                                className="rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300 hover:shadow-sm transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                                    <h3 className="font-bold text-base text-gray-900">{exp.title}</h3>
                                    <span className="text-gray-400 text-sm shrink-0 sm:ml-4">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="text-blue-700 font-semibold text-sm">{exp.company}</span>
                                    <span className="text-gray-300">·</span>
                                    <span className="text-gray-400 text-sm">{exp.location}</span>
                                    {exp.current && (
                                        <span
                                            className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium border border-blue-100">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
