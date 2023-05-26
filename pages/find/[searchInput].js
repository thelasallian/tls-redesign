export default function FindPage({searchInput, articles, users}) {
    console.log(users);

    return (
        <div>{searchInput}</div> 
    );
}

export async function getServerSideProps({req, res, params}) {
    const rawSearchInput = params.searchInput;
    const searchInput = rawSearchInput.replaceAll("%20"," ");

    const articlesSearched = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?search=${rawSearchInput}`);
    const articles = await articlesSearched.json();

    const usersSearched = await fetch(`https://thelasallian.com/wp-json/wp/v2/users/?search=${rawSearchInput}`);
    const users = await usersSearched.json();
    
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
    )
    
    return {
        props: {
            searchInput: searchInput,
            articles: articles,
            users: users,
        },
    };
}