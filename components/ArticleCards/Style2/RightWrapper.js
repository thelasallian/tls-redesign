import React from "react";
import styles from "@/styles/ArticleCards/Style2/RightWrapper.module.scss";
import createAuthorsList from "../../Functions/createAuthorsList";
import cleanArticleExcerpt from "../../Functions/cleanArticleExcerpt";


export default function RightWrapper({article}) {
    return (
        <a href={`/presents/${article.slug}`}>
            <div className={styles.article__wrapper__right}>
                <div className={styles.article__image__wrapper}>
                    <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
                </div>
            </div>
        </a>
    );
}