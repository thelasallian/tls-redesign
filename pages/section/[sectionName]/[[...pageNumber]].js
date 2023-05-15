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
            <title>{sectionNameCapitalized} - The LaSallian</title>
            </Head>
            <div className="wrapper">
                <Header section={sectionNameCapitalized}/>
                <Body articles={articles}/>
                <Footer/>
            </div>
        </>
        
    );
}

function sectionToCategory(sectionName) {
    if(sectionName === "university") return 4;
    else if(sectionName === "menagerie") return 8;
    else if(sectionName === "sports") return 6;
    else if(sectionName === "vanguard") return 1883;
    else if(sectionName === "opinion") return 5;
    else null;
}

export async function getServerSideProps({req, res, params}) {
    const sectionName = params.sectionName;
    const pageNumber = (isNaN(params.pageNumber)) ? 1 : params.pageNumber;
    const category = sectionToCategory(sectionName);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
    )

    const universityResponse = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=20&categories=${category}&page=${pageNumber}`);
    const universityArticles = await universityResponse.json();

    return {
        props: {
            sectionName: sectionName,
            articles: universityArticles,
        },
    };
}