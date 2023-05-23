import { useRouter } from "next/router";
import Head from "next/head";

import Header from '@/components/HeaderV2/Header';
import Body from '@/components/Body/author/Body';
import Footer from '@/components/Footer/Full/Footer';

export default function AuthorPage({author, publishPressId, articles}) {
    return (
        <>
            <Head>
                <title>{`${author.name} - The LaSallian`}</title>
            </Head>
            <div className="wrapper">
                <Header section={"University"}/>
                <Body author={author} publishPressId={publishPressId} articles={articles}/>
                <Footer section={"University"}/>
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

    
    const publishPressResponse = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?author=${authorId}&per_page=1&_fields=id,authors,excerpt,date,title,slug,categories,jetpack_featured_media_url`);
    const publishPressData = await publishPressResponse.json();

    const publishPressId = publishPressData[0].authors[0].term_id;

    const articlesResponse = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?ppma_author=${publishPressId}&per_page=5&_fields=id,authors,date,excerpt,title,slug,categories,jetpack_featured_media_url`);
    const articlesData = await articlesResponse.json();

    return {
        props: {
            author: authorData[0],
            publishPressId: publishPressId,
            articles: articlesData,
        },
    };
}