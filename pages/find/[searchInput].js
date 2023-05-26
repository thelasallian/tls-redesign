import Head from 'next/head'

import Header from "@/components/HeaderV2/Header";
import Body from "@/components/Body/search/Body";
import {default as Footer} from "@/components/Footer/Full/Footer";

export default function FindPage({rawSearchInput, searchInput, articles, users}) {

    return (
        <>
            <Head>
                <title>{`Searching for: ${searchInput}`}</title>
            </Head>
            <div className="wrapper">
                <Header section={"University"}/>
                <Body articles={articles} users={users} searchInput={searchInput} rawSearchInput={rawSearchInput}/>
                <Footer section={"University"}/>
            </div>
        </>
    );
}

export async function getServerSideProps({req, res, params}) {
    const rawSearchInput = params.searchInput;
    const searchInput = rawSearchInput.replaceAll("%20"," ");

    const articlesSearched = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?search=${rawSearchInput}&per_page=10&page=1&_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url`);
    const articles = await articlesSearched.json();

    const usersSearched = await fetch(`https://thelasallian.com/wp-json/wp/v2/users/?search=${rawSearchInput}`);
    const users = await usersSearched.json();

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
    )
    
    return {
        props: {
            rawSearchInput: rawSearchInput,
            searchInput: searchInput,
            articles: articles,
            users: users,
        },
    };
}