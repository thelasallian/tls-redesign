import React, { useState, useEffect } from "react";
import styles from "@/styles/Body/section/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";

export default function Body({articles, category}) {

    const [pageNumber, setPageNumber] = useState(2);
    const [articleData, setArticleData] = useState(articles);

    const articleCards = articleData.map(article => 
        <div className={styles.article__card__wrapper} key={`article__card__wrapper-${article.id}`}>
            <ArticleCard 
                article={article}
                textLocation={"right"}
                isBanner={false}
                cardSize={"medium"}
                hasDate={true}
            />
        </div>
    );

    const fetchItems = async () => {
        const response = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=20&categories=${category}&page=${pageNumber}`);
        const newData = await response.json();
        setArticleData(prevData => prevData.concat(newData));
    }

    useEffect(()=> {
        setPageNumber(prevState => prevState+1);
    }, [articleData]);

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.body__articles__wrapper}>
                {articleCards}
            </div>
            <button onClick={fetchItems}>click</button>
        </div>
    );
}