import Head from "next/head";

const meta = {
    title: "Thameem Karakkoth - Developer with keen interest in cyber security",
    description: "Backend engineer, Full stack developer, Cyber security enthusiast",
    keywords: "Thameem Karakkoth,thameemk612"
}

function Container() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta name="keywords" content={meta.keywords}/>
            </Head>
        </div>
    )
}

export default Container