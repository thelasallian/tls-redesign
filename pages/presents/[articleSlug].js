import { useRouter } from "next/router";
import Head from 'next/head'

import Header from '@/components/HeaderV2/Header';
import Body from '@/components/Body/article/Body';
import Footer from '@/components/Footer/Full/Footer';

import dehtml from "@/components/Functions/dehtml";

export default function ArticlePage({article, section}) {
    const router = useRouter();
    const headline = dehtml(article.title["rendered"]);

    return (
        <>
            <Head>
                <title>{headline}</title>
            </Head>

            <div className="wrapper">
                <Header article={article} section={section}/>
                <Body article={article} section={section}/>
                <Footer section={section}/>
            </div>
        </>
    );
}

export async function getServerSideProps({params}) {
    const articleResponse = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?slug=${params.articleSlug}`);
    const articleData = await articleResponse.json();
    const article = articleData[0];

    const section = () => {
        if(article.categories.includes(4)) return "University";
        else if(article.categories.includes(8)) return "Menagerie";
        else if(article.categories.includes(6)) return "Sports";
        else if(article.categories.includes(1883)) return "Vanguard";
        else if(article.categories.includes(5)) return "Opinion";
        else return "None";
    }

    return {
        props: {
            article: article,
            section: section()
        },
    };
}