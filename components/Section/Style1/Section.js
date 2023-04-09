import React from "react";
import styles from "@/styles/Section/Style1/Section.module.scss";
import PrimaryArticle from "@/components/ArticleCards/Style1/PrimaryArticle";
import SecondaryArticle from "@/components/ArticleCards/Style1/SecondaryArticle";

export default function Section({section}) {
    const secondaryArticles = section.articles.slice(2);
    const secondaryArticlesSection = secondaryArticles.map(secondaryArticle => <SecondaryArticle article={secondaryArticle}/>);

    return (
        <div className={styles.section__area__wrapper}>
            <div className={styles.section__title__wrapper}>
                <a className={styles.section__title__link} href={`/section/${section.name.toLowerCase()}`}>{section.name}</a>
            </div>
            <div className={styles.section__articles__wrapper}>
                <PrimaryArticle article={section.articles[1]}/>
                <div className={styles.articles__secondary__wrapper}>
                    {secondaryArticlesSection}
                </div>
            </div>
        </div>
    );
}