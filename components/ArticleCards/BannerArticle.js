import React from "react";
import styles from '@/styles/BannerArticleCard.module.scss';
import concatonateAuthors from "../Functions/concatonateAuthors";

export default function BannerArticle({article}) {
    const title = article.title["rendered"].replace(/<\/?[^>]+(>|$)/g, ""); // Solution by https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
    const authorList = concatonateAuthors(article.authors);

    return (
        <a className={styles.article__wrapper__full} href="">
            <img className={styles.article__image__full} src={article.jetpack_featured_media_url}/>
            <div className={styles.article__information__wrapper}>
                <div className={styles.article__headline__wrapper}>{title}</div>
                <div className={styles.article__writer__wrapper}>by {authorList}</div>
                <div className={styles.article__snippet__wrapper}>
                    The quick brown fox jumps over the lazy dog.
                </div>
            </div>
        </a>
    );
}