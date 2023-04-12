import React from "react";
import styles from "@/styles/ArticleCards/Style2/LeftWrapper.module.scss";
import createAuthorsList from "../../Functions/createAuthorsList";
import cleanArticleExcerpt from "../../Functions/cleanArticleExcerpt";


export default function LeftWrapper({articles}) {

    const secondaryArticles = articles.slice(1).map(article => 
        <a className={styles.article__link__wrapper} href="">
            <div className={styles.articles__secondary__wrapper}>
                <div className={styles.article__headline__wrapper}>
                    {article.title["rendered"]}
                </div>
                <div className={styles.article__author__wrapper}>
                    by {createAuthorsList(article.authors)}
                </div>
            </div>
        </a>
    );

    console.log(secondaryArticles);

    return (
        <div className={styles.articles__wrapper__left}>
            <a className={styles.article__link__wrapper} href={`/presents/${articles[0].slug}`}>
                <div className={styles.articles__primary__wrapper}>
                    <div className={styles.article__headline__wrapper}>
                        {articles[0].title["rendered"]}
                    </div>
                    <div className={styles.article__author__wrapper}>
                        by {createAuthorsList(articles[0].authors)}
                    </div>
                    <div className={styles.article__snippet__wrapper} dangerouslySetInnerHTML={{__html: articles[0].excerpt["rendered"]}}>
                    </div>
                </div>
            </a>

            {secondaryArticles}
        </div>
    );
}