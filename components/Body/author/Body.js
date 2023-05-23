import styles from "@/styles/Body/author/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";
import { useEffect, useState } from "react";

export default function Body({author, publishPressId, articles}) {
    const [pageNumber, setPageNumber] = useState(2);
    const [articleData, setArticleData] = useState(articles);
    const [isMobile, setIsMobile] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [hasMoreArticles, setHasMoreArticles] = useState(true);

    const handlingWindowResize = () => {
        setIsMobile(window.innerWidth < 750);
    }
    
    useEffect(() => {
        setIsMobile(window.innerWidth < 750);
        window.addEventListener("resize", handlingWindowResize);
    },[]);

    const articleCards = articleData.map(article => 
        <div className={styles.articles__card__wrapper} key={`articles__card__wrapper-${article.id}`}>
            <ArticleCard 
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

        const response = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?ppma_author=${publishPressId}&page=${pageNumber}&per_page=5&_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url`);
        const newData = await response.json();

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
            <div className={styles.author__information__wrapper}>

                <div className={styles.author__image__wrapper}>
                    <img className={styles.author__image__img} src={author.avatar_urls["96"]}/> 
                </div>
                <div className={styles.author__details__wrapper}>
                    <div className={styles.author__name__wrapper}>
                        {author.name}
                    </div>
                    <div className={styles.author__bio__wrapper}>
                        {(author.description != "") ? author.description : "A contributor of The LaSallian. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."}
                    </div>
                </div>
            </div>

            <div className={styles.author__articles__wrapper}>
                {articleCards}
            </div>

            <div className={styles.author__button__wrapper}>
                {setLoading}
            </div>
            
        </div>
    );
}