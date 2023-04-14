import React, { useEffect, useState } from "react";
import styles from "@/styles/Section/Style2/Section.module.scss";
import LeftWrapper from "@/components/ArticleCards/Style2/LeftWrapper";
import RightWrapper from "@/components/ArticleCards/Style2/RightWrapper";
import SecondaryArticle from "@/components/ArticleCards/Style2/SecondaryArticle";
import PrimaryArticleMobile from "@/components/ArticleCards/Style2/PrimaryArticleMobile";

export default function Section({section}) {
    const [windowWidth, setWindowWidth] = useState(0);

    const handlingWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handlingWindowResize);
    },[]);

    return (
        <div className={styles.section__area__wrapper}>
            <div className={styles.section__title__wrapper}>
                <a className={styles.section__title__link} id={styles[`${section.name.toLowerCase()}`]} href={`/section/${section.name.toLowerCase()}`}>{section.name}</a>
            </div>
            <div className={styles.section__articles__wrapper}>
                <div className={styles.articles__left__wrapper}>
                    <LeftWrapper articles={section.articles.slice(1)}/>
                </div>
                <div className={styles.articles__right__wrapper}>
                    <RightWrapper article={section.articles[1]}/>
                </div>
            </div>
        </div>
    );
}