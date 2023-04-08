import React from "react";
import styles from "@/styles/ArticleCards/Style1/PrimaryArticle.module.scss";

export default function PrimaryArticle({article}) {
    return (
        <a className={styles.articles__primary__wrapper} href={`/presents/${article.slug}`}>
            <div className={styles.article__image__wrapper}>
                <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
            </div>
            <div className={styles.article__information__wrapper}>
                <div className={styles.article__headline__wrapper}>headline</div>
                <div className={styles.article__author__wrapper}>by authors</div>
            </div>
        </a>
    );
}