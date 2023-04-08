/*
 * Project : thameem.me
 * Filename : sitemap.xml.tsx
 * Author : thameem
 * Modified time : Mon, 30 Jan 2023 at 8:54 pm India Standard Time
 */

const createSitemap = (slugs: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
    .map((slug) => {
        return `
                <url>
                    <loc>${`https://thameem.me/${slug}`}</loc>
                </url>
            `;
    })
    .join('')}
    </urlset>
`;


export async function getServerSideProps({res}: { res: any }) {

    const allPages = [
        ...[
            '',
            'about',
            'blog',
            'contact',
            'instagram',
            'facebook',
            'github',
            'twitter',
            'linkedin',
            'medium'
        ]
    ];

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );
    res.write(createSitemap(allPages));
    res.end();

    return {
        props: {}
    };
}

export default function Sitemap() {
    return null;
}
