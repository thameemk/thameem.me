import Link from 'next/link';

export default function BlogPostCard() {

    return (
        <Link
            href={'/'}
        >
            <div
                className="bg-[url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')] flex flex-col justify-between h-full bg-gray:900 rounded-2xl p-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-100 tracking-tight">
                        sample title
                    </h4>
                </div>
            </div>

        </Link>
    );
}
