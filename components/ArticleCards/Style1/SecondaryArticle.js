import React from "react";
import createAuthorsList from "../../Functions/createAuthorsList";
import cleanArticleExcerpt from "../../Functions/cleanArticleExcerpt";
import styles from "@/styles/ArticleCards/Style1/SecondaryArticle.module.scss";

export default function SecondaryArticle({article}) {
    const headline = article.title["rendered"].replace(/<\/?[^>]+(>|$)/g, ""); // Solution by https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
    const authors = createAuthorsList(article.authors);
    const excerpt = cleanArticleExcerpt(article.excerpt["rendered"]);

    return (
        <a className={styles.article__link__wrapper} href={`/presents/${article.slug}`}>
            <div className={styles.article__box__wrapper}>

                <div className={styles.article__image__wrapper}>
                    <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
                </div>
                <div className={styles.article__information__wrapper}>
                    <div className={styles.article__headline__wrapper} dangerouslySetInnerHTML={{__html: headline}}/>
                    <div className={styles.article__author__wrapper}>by {authors}</div>
                </div>

            </div>
        </a>
    );
}