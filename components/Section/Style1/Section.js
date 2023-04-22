import React, { useEffect, useState } from "react";
import styles from "@/styles/Section/Style1/Section.module.scss";

import {default as SecondaryArticle} from "@/components/ArticleCards/compact__full__right/ArticleCard";

export default function Section({section}) {

    const primaryArticle = section.articles[1];
    const secondaryArticles = section.articles.slice(2);

    const seconaryArticlesWrapper = secondaryArticles.map(article =>
        <div className={styles.article__wrapper__full}>
            <SecondaryArticle article={article}/>
        </div>
    );

    return (
        <div className={styles.section__wrapper__full}>

            <div className={styles.section__title__wrapper}>
                <a className={styles.section__title__link} id={styles[`${section.name.toLowerCase()}`]} href={`/section/${section.name.toLowerCase()}`}>{section.name}</a>
            </div>

            <div className={styles.section__articles__wrapper}>
                <div className={styles.articles__left__wrapper}>
                    picture
                </div>
                <div className={styles.articles__right__wrapper}>
                    {seconaryArticlesWrapper}
                </div>
            </div>

        </div>
    );
}