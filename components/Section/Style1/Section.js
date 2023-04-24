import React, { useEffect, useState } from "react";
import styles from "@/styles/Section/Style1/Section.module.scss";

import {default as PrimaryArticle} from "@/components/ArticleCards/card__out/ArticleCard";
import {default as SecondaryArticle} from "@/components/ArticleCards/card__out/ArticleCard";

export default function Section({section}) {

    const primaryArticle = section.articles[1];
    const secondaryArticles = section.articles.slice(2);

    const primaryArticleWrapper = (
        <PrimaryArticle 
            article={primaryArticle}
            textAlignment={"left"}
            textLocation={"bottom"}
            hasHeadline={true}
            hasAuthor={true}
            hasSnippet={true}
            hasImage={false}
            isMobile={false}
        />
    );

    const secondaryArticlesWrapper = secondaryArticles.map((article, index) =>
        <div 
            className={styles.article__wrapper__full} 
            key={`${article.id}-articleWrapperFull`} 
            style={{height: (index==0) ? 140 : 70}}>
                <SecondaryArticle 
                    article={article}
                    direction={"right"}
                    hasSnippet={index==0}
                    hasImage={false}
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
                    
                </div>
            </div>

        </div>
    );
}