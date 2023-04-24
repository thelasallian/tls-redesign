import React, { useEffect, useState } from "react";
import styles from "@/styles/Section/Style5/Section.module.scss";

import {default as PrimaryArticle} from "@/components/ArticleCards/card__in__large/ArticleCard";
import {default as SecondaryArticle} from "@/components/ArticleCards/card__in__large/ArticleCard";

export default function Section({section}) {

    const primaryArticle = section.articles[1];
    const secondaryArticles = section.articles.slice(2);

    const primaryArticleWrapper = (
        <PrimaryArticle 
            article={primaryArticle} 
            direction={"bottom"} 
            hasAuthor={true}
            hasSnippet={true}
        />
    );

    const secondaryArticlesWrapper = secondaryArticles.map((article, index) =>
        <div className={styles.article__wrapper__full} key={`${article.id}-articleWrapperFull`}>
            <SecondaryArticle 
                article={article}
                direction={"right"}
                hasSnippet={false}
                hasImage={true}
            />
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