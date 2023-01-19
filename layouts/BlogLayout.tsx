/*
 * Project : thameem.me
 * Filename : blog.tsx
 * Author : thameem
 * Modified time : Thu, 19 Jan 2023 at 8:48 pm India Standard Time
 */


import Container from "../components/Container";

function BlogLayout({children, post}: { post: any, children: any }) {
    return (
        <Container>
            <h1>post.title</h1>
        </Container>
    )
}

export default BlogLayout