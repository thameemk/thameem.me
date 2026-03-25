/*
 * Project : thameem.me
 * Filename : HomeAbout.ts
 * Author : thameem
 * Modified time : Sun, 22 Mar 2026 at 1:04 pm India Standard Time
 */


import Link from "next/link";

function HomeAbout() {
    return (
        <section className="border-b border-gray-200 mb-10 pb-10">
            <h2 className="font-black text-2xl md:text-4xl mb-6">About</h2>
            <div className="border-l-4 border-blue-600 pl-5 flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-lg md:text-xl text-gray-800 leading-snug">
                        Building reliable backends, shipping AI features, and staying curious about security.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Hi, I'm Thameem, a Backend Product Engineer based in Kerala. I focus on building scalable
                        architectures, finding practical ways to integrate AI, and designing resilient backend systems
                        that hold up when traffic spikes.
                        <br/>
                        With deep expertise across languages like Python, PHP, Rust, and JavaScript, I specialize in
                        transforming complex technical challenges into robust, high-performance solutions. Beyond
                        writing code, I am an active conference speaker, a published researcher, and a dedicated
                        community builder.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Backend Engineering", "AI & LLMs", "System Design", "DevOps", "Cyber Security"].map((tag) => (
                            <span key={tag}
                                  className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Link href="/about"
                          className="inline-flex items-center gap-1 text-sm text-blue-700 font-medium hover:text-blue-900 transition-colors">
                        Continue reading <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout;