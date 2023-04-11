import React from "react";
import styles from "@/styles/ArticleCards/Style2/PrimaryArticle.module.scss";
import createAuthorsList from "../../Functions/createAuthorsList";
import cleanArticleExcerpt from "../../Functions/cleanArticleExcerpt";


export default function PrimaryArticle({article}) {
    const headline = article.title["rendered"].replace(/<\/?[^>]+(>|$)/g, ""); // Solution by https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
    const authors = createAuthorsList(article.authors);
    const excerpt = cleanArticleExcerpt(article.excerpt["rendered"]);

    return (
        <a className={styles.articles__primary__wrapper} href={`/presents/${article.slug}`}>
            <div className={styles.article__image__wrapper}>
                <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
            </div>
        </a>
    );
}