import styles from "@/styles/Body/author/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";
import AuthorCard from "@/components/AuthorCards/card__out/AuthorCard";
import { useEffect, useState } from "react";

export default function Body({authors, articles, searchInput, rawSearchInput}) {
    const [pageNumber, setPageNumber] = useState(2);
    const [articleData, setArticleData] = useState(articles);
    const [isFetching, setIsFetching] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const authorCards = authors.map(author => 
        <div className={styles.articles__card__wrapper}>
            <AuthorCard author={author}/>
        </div>
    );

    const articleCards = articles.map(article => 
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

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.author__articles__wrapper}>
                {authorCards}
                {articleCards}
            </div>
        </div>
    );
}