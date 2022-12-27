import Link from 'next/link';

// flex flex-col md:flex-row justify-between h-full bg-gray:900 rounded-2xl p-4

export default function BlogPostCard() {

    return (
        <Link
            href={'/'}
        >
            <article
                className="rounded-2xl h-64 mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
                style={{backgroundImage: 'url(/static/images/blog/sample_blog.jpg)'}}>
                <div
                    className="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pt-48 hover:bg-opacity-75 transform duration-300">
                    <h4 className="text-white">
                        On A Day Like Today
                    </h4>
                </div>
            </article>

        </Link>
    );
}
