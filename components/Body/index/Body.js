import React, { useEffect, useState } from "react";
import styles from "@/styles/Body/index/Body.module.scss";

// Swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import {default as Section__Style1} from "@/components/Section/Style1/Section";
import {default as PrimaryArticle} from "@/components/ArticleCards/card__out__large/ArticleCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Body({sections}) {
    
    const [isMobile, setIsMobile] = useState(0);
    const bannerArticles = sections.map(section => section.articles[0]);

    const handlingWindowResize = () => {
        setIsMobile(window.innerWidth < 750);
    }
    
    useEffect(() => {
        setIsMobile(window.innerWidth < 750);
        window.addEventListener("resize", handlingWindowResize);
    },[]);

    const sectionArticlesWrapper = sections.map(section => 
        <div className={styles.body__section__wrapper}>
            <Section__Style1 section={section} isMobile={isMobile}/>
        </div>
    );

    const bannerArticlesWrapper = bannerArticles.map(article => {
        <PrimaryArticle
            article={article}
        />
    });

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.body__section__wrapper}>
                <PrimaryArticle
                    article={bannerArticles[0]}
                    direction={"right"}
                    isBanner={true}
                />
            </div>

            {sectionArticlesWrapper}
        </div>
    );
}