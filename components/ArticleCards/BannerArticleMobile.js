import React from "react";
import styles from "@/styles/BannerArticle/BannerArticleMobile.module.scss";
import createAuthorsList from "../Functions/createAuthorsList";
import cleanArticleExcerpt from "../Functions/cleanArticleExcerpt";


export default function BannerArticleFull({article}) {
    const headline = article.title["rendered"].replace(/<\/?[^>]+(>|$)/g, ""); // Solution by https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
    const authors = createAuthorsList(article.authors);
    const excerpt = cleanArticleExcerpt(article.excerpt["rendered"]);

    return (
        <a className={styles.article__link__banner} href={`/presents/${article.slug}`}>

            <div className={styles.article__wrapper__banner}>
                <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
            </div>

            
        </a>
    );
}