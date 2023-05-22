import { Router, useRouter } from "next/router";
import Head from "next/head";

import Header from '@/components/HeaderV2/Header';
import Body from '@/components/Body/section/Body';
import Footer from '@/components/Footer/Full/Footer';

import { useEffect, useState } from "react";

import sectionToCategory from "@/components/Functions/sectionToCategory";

export default function SectionPage({sectionName, articles, category}) {
    const sectionNameCapitalized = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);

    return (
        <>
            <Head>
            <title>{`${sectionNameCapitalized} - The LaSallian`}</title>
            </Head>
            <div className="wrapper">
                <Header section={sectionNameCapitalized}/>
                <Body articles={articles} category={category}/>
                <Footer/>
            </div>
        </>
        
    );
}

export async function getServerSideProps({req, res, params}) {
    const sectionName = params.sectionName;
    const category = sectionToCategory(sectionName);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
    )

    const universityResponse = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=20&categories=${category}&page=1`);
    const universityArticles = await universityResponse.json();

    return {
        props: {
            sectionName: sectionName,
            articles: universityArticles,
            category: category,
        },
    };
}