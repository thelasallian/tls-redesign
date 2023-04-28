import React, { useEffect, useState } from "react";
import styles from "@/styles/Body/index/Body.module.scss";

// Swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import {default as Section__Style1} from "@/components/Section/Style1/Section";
import {default as Section__Style2} from "@/components/Section/Style2/Section";
import {default as Section__Style3} from "@/components/Section/Style3/Section";
import {default as Section__Style4} from "@/components/Section/Style4/Section";
import {default as Section__Style5} from "@/components/Section/Style5/Section";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";
import {default as MobileArticleCard} from "@/components/ArticleCards/card__in/ArticleCard";

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

    const sectionArticlesWrapper = sections.map(section => {
        if(section.name === "University") {
            return (
                <div className={styles.body__section__wrapper} key={`${section.name}-body__section__wrapper`}>
                    <Section__Style1 key={`${section.name}-Section__Style1`} section={section} isMobile={isMobile}/>
                </div>
            );
        }
        else if(section.name === "Menagerie") {
            return (
                <div className={styles.body__section__wrapper} key={`${section.name}-body__section__wrapper`}>
                    <Section__Style2 key={`${section.name}-Section__Style2`} section={section} isMobile={isMobile}/>
                </div>
            );
        } else if(section.name === "Sports") {
            return (
                <div className={styles.body__section__wrapper} key={`${section.name}-body__section__wrapper`}>
                    <Section__Style3 key={`${section.name}-Section__Style3`} section={section} isMobile={isMobile}/>
                </div>
            );
        } else if(section.name === "Vanguard") {
            return (
                <div className={styles.body__section__wrapper} key={`${section.name}-body__section__wrapper`}>
                    <Section__Style4 key={`${section.name}-Section__Style4`} section={section} isMobile={isMobile}/>
                </div>
            );
        } else {
            return (
                <div className={styles.body__section__wrapper} key={`${section.name}-body__section__wrapper`}>
                    <Section__Style5 key={`${section.name}-Section__Style5`} section={section} isMobile={isMobile}/>
                </div>
            );
        }

    });

    const bannerArticlesWrapper = bannerArticles.map(article => 
        <SwiperSlide key={`${article.id}-SwiperSlide`}>
            {(isMobile) ? (
                <MobileArticleCard 
                    article={article}
                    textAlignment={"left"}
                    textLocation={"right"}
                    hasHeadline={true}
                    hasAuthor={true}
                    hasSnippet={true}
                    hasImage={true}
                    isMobile={false}
                    isBanner={true}
                />
            ) : (
                <ArticleCard 
                    article={article}
                    textAlignment={"left"}
                    textLocation={"right"}
                    hasHeadline={true}
                    hasAuthor={true}
                    hasSnippet={true}
                    hasImage={true}
                    isMobile={false}
                    isBanner={true}
                />
            )}
        </SwiperSlide>
    );

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.body__section__wrapper}>
                <Swiper
                        spaceBetween={30}
                        loop={true}
                        pagination={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                    {bannerArticlesWrapper}
                </Swiper>
            </div>

            {sectionArticlesWrapper}
        </div>
    );
}