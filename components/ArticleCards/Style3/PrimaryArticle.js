import React from "react";
import styles from "@/styles/ArticleCards/Style1/PrimaryArticle.module.scss";
import createAuthorsList from "../../Functions/createAuthorsList";
import dehtml from "@/components/Functions/dehtml";
import shorten from "@/components/Functions/shorten";

export default function PrimaryArticle({article}) {
    const headline = dehtml(article.title["rendered"]);
    const authors = createAuthorsList(article.authors);
    const excerpt = shorten(dehtml(article.excerpt["rendered"]), 30);

    return (
        <a className={styles.articles__primary__wrapper} href={`/presents/${article.slug}`}>
            <div className={styles.article__image__wrapper}>
                <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
            </div>
            <div className={styles.article__information__wrapper}>
                <div className={styles.article__headline__wrapper}>{headline}</div>
                <div className={styles.article__author__wrapper}>by {authors}</div>
                <div className={styles.article__snippet__wrapper}>
                    {excerpt}
                    <span className={styles.snippet__readMore__link}>Read More</span>
                </div>
            </div>
        </a>
    );
}