import { useRouter } from "next/router";
import Head from "next/head";

export default function AuthorPage({userData}) {
    console.log(userData);

    return (
        <>
            <Head>
                <title>{`${userData.name} - The LaSallian`}</title>
            </Head>
            <h1>Details about {userData.name}</h1>
        </>
    );
}

export async function getServerSideProps({req, res, params}) {
    const authorSlug = params.authorSlug;

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
    )

    const userResponse = await fetch(`https://thelasallian.com/wp-json/wp/v2/users/?slug=${authorSlug}`);
    const userData = await userResponse.json();

    return {
        props: {
            userData: userData[0],
        },
    };
}