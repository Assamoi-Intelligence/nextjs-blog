import Head from "next/head";
import Script from "next/script";


import Link from "next/link";
import Layout from "../../components/layout";
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnLoad" onLoad={() => console.log("Script correctly loaded")} />
            <h1>First Post</h1>
            <h2>
                <Link href={"/"}>Back to home</Link>
            </h2>
        </Layout>
    );
}