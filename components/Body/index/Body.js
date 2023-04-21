import React, { useEffect, useState } from "react";
import styles from "@/styles/Body/index/Body.module.scss";

import BannerArticleFull from "@/components/ArticleCards/BannerArticleFull";
import BannerArticleMobile from "@/components/ArticleCards/BannerArticleMobile";
import {default as Style1} from "@/components/Section/Style1/Section";
import {default as Style2} from "@/components/Section/Style2/Section";
import {default as Style3} from "@/components/Section/Style3/Section";

// Swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Body({sections}) {
    
    const [windowWidth, setWindowWidth] = useState(0);

    const handlingWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    const bannerArticles = sections.map(section => section.articles[0]);
    const bannerArticleCards = bannerArticles.map(bannerArticle =>
        (windowWidth < 750) ? 
        <SwiperSlide key={`${bannerArticle.id}-SwiperSlide`}><BannerArticleMobile key={`${bannerArticle.id}-bannerArticleMobile`} article={bannerArticle}/></SwiperSlide>:
        <SwiperSlide key={`${bannerArticle.id}-SwiperSlide`}><BannerArticleFull key={`${bannerArticle.id}-bannerArticleFull`}  article={bannerArticle}/></SwiperSlide>
    );

    const sectionArticles = sections.map(section => {
        if(section.name === "Menagerie") {
            return (
                <div key={`${section.name}-sectionArticles`} className={styles.section__articles__full}>
                    <Style2 key={`${section.name}-Style1`}section={section}/>
                </div>
            );
        } else if(section.name === "Sports") {
            return (
                <div key={`${section.name}-sectionArticles`} className={styles.section__articles__full}>
                    <Style3 key={`${section.name}-Style1`}section={section}/>
                </div>
            );
        } else {
            return (
                <div key={`${section.name}-sectionArticles`} className={styles.section__articles__full}>
                    <Style1 key={`${section.name}-Style1`}section={section}/>
                </div>
            );
        }

    });

    //Single-responsibility useEffects
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handlingWindowResize);
    },[]);

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.section__banners__full}>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {bannerArticleCards}
                </Swiper>
            </div>
            {sectionArticles}
        </div>
    );
}