/*
 * Project : thameem.me
 * Filename : Footer.tsx
 * Author : thameem
 * Modified time : Tue, 17 Jan 2023 at 12:39 am India Standard Time
 */

import meta from "./Meta";

function Footer() {
    return (
        <div className="text-xs text-center text-gray-700">
            <p className="mb-2">
                © {(new Date().getFullYear())}
            </p>

            <p className="mb-2">
                <a rel="noreferrer" href={meta.linkedin} target="_blank">LinkedIn</a>
                &nbsp;&nbsp;
                <a rel="noreferrer" href={meta.github} target="_blank">GitHub</a>
                &nbsp;&nbsp;
                <a rel="noreferrer" href={meta.instagram} target="_blank">Instagram</a>
            </p>
        </div>
    )
}

export default Footer