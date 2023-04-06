import React from "react";
import styles from "@/styles/BannerArticle/BannerArticleFull.module.scss";
import createAuthorsList from "../Functions/createAuthorsList";
import cleanArticleExcerpt from "../Functions/cleanArticleExcerpt";


export default function BannerArticleFull({article}) {
    const headline = article.title["rendered"].replace(/<\/?[^>]+(>|$)/g, ""); // Solution by https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
    const authors = createAuthorsList(article.authors);
    const excerpt = cleanArticleExcerpt(article.excerpt["rendered"]);

    return (
        <a className={styles.article__wrapper__banner} href={`/presents/${article.slug}`}>
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