import React from "react";
import styles from "@/styles/Body/Index/BodyFull.module.scss";
import BannerArticle from "@/components/ArticleCards/BannerArticle";

export default function BodyFull({sections}) {
    // const bannerArticles = sections.map(section => section.articles[0]);
    // const bannerArticleCards = bannerArticles.map(bannerArticle => <BannerArticle key={bannerArticle.id} article={bannerArticle}/>);

    
    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.section__banners__full}>
                lorem500
            </div>
            <div className={styles.section__articles__full}>
                lorem
            </div>
        </div>
    );
}