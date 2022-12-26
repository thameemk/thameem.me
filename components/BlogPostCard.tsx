import Link from 'next/link';

// flex flex-col md:flex-row justify-between h-full bg-gray:900 rounded-2xl p-4

export default function BlogPostCard() {

    return (
        <Link
            href={'/'}
        >
            <div className="bg-[url('/static/images/blog/sample_blog.jpg')]
            rounded-2xl h-64 w-48"
            >
                <h4>
                    sample title
                </h4>
            </div>

        </Link>
    );
}
