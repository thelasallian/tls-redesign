import styles from "@/styles/Body/author/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";
import AuthorCard from "@/components/AuthorCards/card__out/AuthorCard";
import { useEffect, useState } from "react";

export default function Body({authors, articles, searchInput, rawSearchInput}) {
    const [pageNumber, setPageNumber] = useState(2);
    const [articleData, setArticleData] = useState(articles);
    const [isFetching, setIsFetching] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hasMoreArticles, setHasMoreArticles] = useState(true);

    const authorCards = authors.map(author => 
        <div className={styles.articles__card__wrapper}>
            <AuthorCard author={author}/>
        </div>
    );

    const articleCards = articleData.map(article => 
        <div className={styles.articles__card__wrapper} key={`articles__card__wrapper-${article.id}`}>
            <ArticleCard 
                key={`${article.id}-articleCard`}
                article={article}
                hasSnippet={!isMobile}
                textLocation={"right"}
                isBanner={false}
                cardSize={"medium"}
                hasDate={true}
                isMobile={isMobile}
            />
        </div> 
    );

    const fetchArticles = async () => {
        setIsFetching(true);

        const response = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?search=${rawSearchInput}&per_page=10&page=${pageNumber}&_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url`);
        const newData = await response.json();

        console.log("raw: "+rawSearchInput);
        console.log("pageNumber: "+pageNumber);
        console.log(newData);

        if(newData.length === undefined) {
            console.log("No more articles left.");
            setIsFetching(false);
            setHasMoreArticles(false);
            return;
        }

        if(newData.length !== 0) {
            setArticleData(prevState => [...prevState, ...newData]);
            setPageNumber(prevState => prevState + 1);
            return;
        }

        
    }

    useEffect(() => {
        setIsFetching(false);
    }, [articleData]);

    const setLoading = (isFetching) ? (
        <div className={styles.body__loading__wrapper}>
            Fetching more articles...
        </div>
    ) : (
        (hasMoreArticles) ? (
            <button onClick={fetchArticles} className={styles.author__button__item}>Show More</button>
        ) : (
            null
        )
    );

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.author__articles__wrapper}>
                {authorCards}
                {articleCards}
            </div>
            <div className={styles.author__button__wrapper}>
                {setLoading}
            </div>
        </div>
    );
}