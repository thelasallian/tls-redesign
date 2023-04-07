import React from "react";
import styles from "@/styles/Section/Style1/Section.module.scss";
import PrimaryArticle from "@/components/ArticleCards/Style1/PrimaryArticle";

export default function Section({section}) {
    return (
        <div className={styles.section__area__wrapper}>
            <div className={styles.section__headline__wrapper}>{section.name}</div>
            <div className={styles.section__articles__wrapper}>
                <div className={styles.articles__primary__wrapper}>
                    <PrimaryArticle article={section.articles[1]}/>
                </div>
                <div className={styles.articles__secondary__wrapper}>
                    secondary wrapper
                </div>
            </div>
        </div>
    );
}