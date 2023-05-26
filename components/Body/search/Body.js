import styles from "@/styles/Body/author/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";
import { useEffect, useState } from "react";

export default function Body({users, articles, searchInput, rawSearchInput}) {
    const [pageNumber, setPageNumber] = useState(2);
    const [articleData, setArticleData] = useState(articles);
    const [isFetching, setIsFetching] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    console.log(articles);

    const articleCards = articles.map(article => 
        <ArticleCard 
            article={article}
            hasSnippet={!isMobile}
            textLocation={"right"}
            isBanner={false}
            cardSize={"medium"}
            hasDate={true}
            isMobile={isMobile}
        />
    );

    return (
        <div>
            <div>{articleCards}</div>
        </div>
    );
}