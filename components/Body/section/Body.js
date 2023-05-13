import React from "react";
import styles from "@/styles/Body/section/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";

export default function Body({articles}) {
    const articleCards = articles.map(article => 
        <ArticleCard 
            article={article}
            textLocation={"right"}
            isBanner={false}
        />
    );

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.body__articles__wrapper}>
                {articleCards}
            </div>
        </div>
    );
}