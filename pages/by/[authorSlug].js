import { useRouter } from "next/router";
import Head from "next/head";

import Header from '@/components/HeaderV2/Header';
import Body from '@/components/Body/author/Body';
import Footer from '@/components/Footer/Full/Footer';

export default function AuthorPage({author, articles}) {
    return (
        <>
            <Head>
                <title>{`${author.name} - The LaSallian`}</title>
            </Head>
            <div className="wrapper">
                <Header section={"University"}/>
                <Body author={author} articles={articles}/>
                <Footer/>
            </div>
        </>
    );
}

export async function getServerSideProps({req, res, params}) {
    const authorSlug = params.authorSlug;

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
    )

    const authorResponse = await fetch(`https://thelasallian.com/wp-json/wp/v2/users/?slug=${authorSlug}`);
    const authorData = await authorResponse.json();

    const authorId = authorData[0].id;

    
    const articlesResponse = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?ppma_author=${authorId}&per_page=5&_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url`);
    const articlesData = await articlesResponse.json();

    return {
        props: {
            author: authorData[0],
            articles: articlesData,
        },
    };
}