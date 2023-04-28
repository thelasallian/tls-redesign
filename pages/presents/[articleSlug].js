import { useRouter } from "next/router";
import Head from 'next/head'

import Header from '@/components/Header/Header';
import Body from '@/components/Body/article/Body';
import Footer from '@/components/Footer/Footer';

export default function ArticlePage({article, section}) {
    const router = useRouter();
    const articleSlug = router.query.articleSlug;

    return (
        <>
            <Head>
                <title>{article.title["rendered"]}</title>
            </Head>

            <div className="wrapper">
                <Header section={section}/>
                <Body article={article} section={section}/>
                <Footer/>
            </div>
        </>
    );
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,content,title,slug,categories,jetpack_featured_media_url&slug=${params.articleSlug}`);
    const data = await response.json();
    const result = data[0];

    const section = () => {
        if(result.categories.includes(4)) return "University";
        else return "Other";
    }

    return {
        props: {
            article: result,
            section: section(),
        },
    };
}