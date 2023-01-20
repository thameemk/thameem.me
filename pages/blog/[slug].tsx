/*
 * Project : thameem.me
 * Filename : [slug].tsx
 * Author : thameem
 * Modified time : Thu, 19 Jan 2023 at 9:53 pm India Standard Time
 */

import React from "react";
import BlogLayout from "../../layouts/BlogLayout";

export default function BlogPost({post}: { post: any }) {
    return (
        <BlogLayout post={post}>
            <h2>blog sample</h2>
        </BlogLayout>
    );
}
