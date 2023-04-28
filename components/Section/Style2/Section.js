import React, { useEffect, useState } from "react";
import styles from "@/styles/Section/Style2/Section.module.scss";

import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";
import {default as MobileArticleCard} from "@/components/ArticleCards/card__in/ArticleCard";

export default function Section({section, isMobile}) {

    const primaryArticle = section.articles[1];
    const secondaryArticles = section.articles.slice(2);

    const primaryArticleWrapper = (
        <ArticleCard 
            article={primaryArticle}
            textAlignment={"center"}
            textLocation={"bottom"}
            hasHeadline={true}
            hasAuthor={true}
            hasSnippet={true}
            hasImage={true}
            isMobile={false}
            isBanner={true}
        />
    );

    const secondaryArticlesWrapper = secondaryArticles.map((article, index) =>
        <div className={styles.article__wrapper__full} key={`${article.id}-articleWrapperFull`}>
            {(isMobile) ? (
                <MobileArticleCard 
                    article={article}
                    textAlignment={"left"}
                    textLocation={"bottom"}
                    hasHeadline={true}
                    hasAuthor={true}
                    hasSnippet={false}
                    hasImage={false}
                    isMobile={false}
                    isBanner={false}
                />
            ) : (
                <ArticleCard 
                    article={article}
                    textAlignment={"left"}
                    textLocation={"bottom"}
                    hasHeadline={true}
                    hasAuthor={true}
                    hasSnippet={isMobile}
                    hasImage={false}
                    isMobile={false}
                    isBanner={false}
                />
            )}
        </div>
    );

    return (
        <div className={styles.section__wrapper__full}>

            <div className={styles.section__title__wrapper}>
                <a className={styles.section__title__link} id={styles[`${section.name.toLowerCase()}`]} href={`/section/${section.name.toLowerCase()}`}>{section.name}</a>
            </div>

            <div className={styles.section__articles__wrapper}>
                <div className={styles.articles__left__wrapper}>
                    {primaryArticleWrapper}
                </div>
                <div className={styles.articles__right__wrapper}>
                    {secondaryArticlesWrapper}
                </div>
            </div>

        </div>
    );
}