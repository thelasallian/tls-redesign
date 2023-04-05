import React from "react";
import styles from '@/styles/BannerArticleCard.module.scss';
import createAuthorsList from "../Functions/createAuthorsList";
import cleanArticleExcerpt from "../Functions/cleanArticleExcerpt";

export default function BannerArticle({article}) {
    const title = article.title["rendered"].replace(/<\/?[^>]+(>|$)/g, ""); // Solution by https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
    const authorsList = createAuthorsList(article.authors);
    const excerpt = cleanArticleExcerpt(article.excerpt["rendered"]);

    return (
        <a className={styles.article__wrapper__full} href={`/presents/${article.slug}`}>
            <img className={styles.article__image__full} src={article.jetpack_featured_media_url}/>
            <div className={styles.article__information__wrapper}>
                <div className={styles.article__headline__wrapper}>{title}</div>
                <div className={styles.article__authors__wrapper}>by {authorsList}</div>
                <div className={styles.article__snippet__wrapper}>
                    {excerpt}
                    <span className={styles.snippet__readMore__link}>Read More</span>
                </div>
            </div>
        </a>
    );
}