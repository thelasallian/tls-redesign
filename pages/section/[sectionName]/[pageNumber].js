import { Router, useRouter } from "next/router";
import Head from "next/head";
import Header from '@/components/HeaderV2/Header';
import Body from '@/components/Body/section/Body';
import Footer from '@/components/Footer/Full/Footer';

export default function SectionPage({sectionName, articles}) {
    const sectionNameCapitalized = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);

    return (
        <>
            <Head>
            <title>{sectionNameCapitalized}</title>
            </Head>
            <div className="wrapper">
                <Header section={sectionNameCapitalized}/>
                <Body articles={articles}/>
                <Footer/>
            </div>
        </>
        
    );
}

export async function getServerSideProps({req, res, params}) {
    const sectionName = params.sectionName;
    const pageNumber = params.pageNumber;
    const category = 4;

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
    )

    const universityResponse = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=${category}&page=${pageNumber}`);
    const universityArticles = await universityResponse.json();

    return {
        props: {
            sectionName: sectionName,
            articles: universityArticles,
        },
    };
}