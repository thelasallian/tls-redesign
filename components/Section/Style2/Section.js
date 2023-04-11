import React, { useEffect, useState } from "react";
import styles from "@/styles/Section/Style2/Section.module.scss";
import PrimaryArticle from "@/components/ArticleCards/Style2/PrimaryArticle";
import SecondaryArticle from "@/components/ArticleCards/Style2/SecondaryArticle";
import PrimaryArticleMobile from "@/components/ArticleCards/Style2/PrimaryArticleMobile";

export default function Section({section}) {
    const secondaryArticles = section.articles.slice(2);
    const secondaryArticlesSection = secondaryArticles.map(secondaryArticle => <SecondaryArticle key={`${secondaryArticle.id}-SecondaryArticle`} article={secondaryArticle}/>);

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
                {(windowWidth < 750)? 
                    <>
                        <div className={styles.articles__secondary__wrapper}>
                            {secondaryArticlesSection}
                        </div>
                        <PrimaryArticleMobile article={section.articles[1]}/>
                    </>
                :
                    <>
                        <div className={styles.articles__secondary__wrapper}>
                            {secondaryArticlesSection}
                        </div>
                        <PrimaryArticle article={section.articles[1]}/>
                    </>
                }
            </div>
        </div>
    );
}