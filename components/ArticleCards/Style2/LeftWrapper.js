import React from "react";
import styles from "@/styles/ArticleCards/Style2/LeftWrapper.module.scss";
import createAuthorsList from "../../Functions/createAuthorsList";
import cleanArticleExcerpt from "../../Functions/cleanArticleExcerpt";


export default function PrimaryArticle({articles}) {

    return (
        <div className={styles.articles__wrapper__left}>
            <div className={styles.articles__primary__wrapper}>
                <div className={styles.article__headline__wrapper}>
                    {articles[0].title["rendered"]}
                </div>
                <div className={styles.article__author__wrapper}>
                    by author
                </div>
                <div className={styles.article__snippet__wrapper}>
                    The quick brown fox jumps over the lazy dog.
                </div>
            </div>
            <div className={styles.articles__secondary__wrapper}>
                aritlcle 2
            </div>
            <div className={styles.articles__secondary__wrapper}>
                aritlcle 3
            </div>
            <div className={styles.articles__secondary__wrapper}>
                aritlcle 4
            </div>
            <div className={styles.articles__secondary__wrapper}>
                aritlcle 5
            </div>
        </div>
    );
}