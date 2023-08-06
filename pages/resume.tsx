/*
 * Project : thameem.me
 * Filename : resume.tsx
 * Author : thameem
 * Modified time : Sun, 22 Jan 2023 at 2:50 pm India Standard Time
 */

import React from "react";

function Resume() {
    React.useEffect(() => {
        const resume_url: any = process.env.NEXT_PUBLIC_RESUME as string;
        window.location.replace(resume_url);
    }, []);
}

export default Resume;
