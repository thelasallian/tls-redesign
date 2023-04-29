import React from "react";
import styles from "@/styles/Body/article/Body.module.scss";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import dehtml from "@/components/Functions/dehtml";

export default function Body({article, section}) {
    const headline = dehtml(article.title["rendered"]);
    const authorsList = createAuthorsList(article.authors, "link");

    console.log(article);

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.body__section__wrapper}>

                <div className={styles.body__header__wrapper}>
                    <div className={styles.header__headline__wrapper}>{headline}</div>
                    <div className={styles.headline__author__wrapper}>
                        by {authorsList}
                    </div>
                    <div className={styles.headline__image__wrapper}>
                        <img className={styles.headline__image__img}/>
                    </div>
                </div>

                <div className={styles.body__content__wrapper} dangerouslySetInnerHTML={{__html: article.content["rendered"]}}/>

                <div className={styles.body__suggestions__wrapper}>
                    Here are some suggestions
                </div>

            </div>
        </div>
    );
}