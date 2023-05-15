import React, { useState, useEffect } from "react";
import styles from "@/styles/Body/section/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";

export default function Body({articles}) {

    const [isGettingArticles, setIsGettingArticles] = useState(false);


    const logCurrentYValue = () => {
        // const bodyWrapper = document.querySelector("."+styles.body__wrapper__full);
        // const bodyWrapperHeight = bodyWrapper.offsetHeight;

        // if(window.pageYOffset > bodyWrapperHeight) {
        //     console.log("reached max");
        // }
    };

    useEffect(() => {
        window.addEventListener("scroll", logCurrentYValue);
    },[]);

    const articleCards = articles.map(article => 
        <div className={styles.article__card__wrapper}>
            <ArticleCard 
                article={article}
                textLocation={"right"}
                isBanner={false}
                cardSize={"medium"}
                hasDate={true}
            />
        </div>
        
    );

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.body__articles__wrapper}>
                {articleCards}
            </div>
        </div>
    );
}