import React from "react";
import styles from "@/styles/BannerArticle/BannerArticleMobile.module.scss";
import createAuthorsList from "../Functions/createAuthorsList";
import cleanArticleExcerpt from "../Functions/cleanArticleExcerpt";
import getNthWord from "../Functions/getNthWord";


export default function BannerArticleFull({article}) {
    let headline = article.title["rendered"].replace(/<\/?[^>]+(>|$)/g, ""); // Solution by https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
    const authors = createAuthorsList(article.authors);
    let excerpt = cleanArticleExcerpt(article.excerpt["rendered"]);
    excerpt = getNthWord(excerpt, 15);
    // headline = getNthWord(headline, 10);

    return (
        <a className={styles.article__link__banner} href={`/presents/${article.slug}`}>

            <div className={styles.article__image__banner}>
                <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
            </div>

            <div className={styles.article__information__wrapper}>
                <div className={styles.article__headline__wrapper}>{headline}</div>
                <div className={styles.article__author__wrapper}>by {authors}</div>
            </div>


        </a>
    );
}


// deprecated
function BannerArticleWithExcerpt() {
    return (
        <a className={styles.article__link__banner} href={`/presents/${article.slug}`}>

            <div className={styles.article__image__banner}>
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