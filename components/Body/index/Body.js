import React, { useEffect, useState } from "react";
import styles from "@/styles/Body/index/Body.module.scss";

// Swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {default as Card__DetailedFullRight} from "@/components/ArticleCards/detailed__full__right/ArticleCard";
import {default as Section__Style1} from "@/components/Section/Style1/Section";

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

    // const bannerArticlesWrapper = bannerArticles.map(article =>
    //     (isMobile) ? 
    //     <SwiperSlide key={`${article.id}-SwiperSlide`}>
    //         <DetailedFullRightCard key={`${article.id}-bannerArticleMobile`} article={article}/>
    //     </SwiperSlide>
    //     :
    //     <SwiperSlide key={`${article.id}-SwiperSlide`}>
    //         <DetailedFullRightCard key={`${article.id}-bannerArticleMobile`} article={article}/>
    //     </SwiperSlide>
    // );

    const sectionArticlesWrapper = sections.map(section => 
        <div className={styles.body__section__wrapper}>
            <Section__Style1 section={section} isMobile={isMobile}/>
        </div>
    );

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.body__section__wrapper}>
                banner
            </div>

            {sectionArticlesWrapper}
        </div>
    );
}