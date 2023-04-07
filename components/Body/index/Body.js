import React, { useEffect, useState } from "react";
import styles from "@/styles/Body/index/Body.module.scss";

import BannerArticleFull from "@/components/ArticleCards/BannerArticleFull";
import BannerArticleMobile from "@/components/ArticleCards/BannerArticleMobile";

// Swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BodyFull({sections}) {
    
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

            <div className={styles.section__articles__full}>
                lorem
            </div>
            <div className={styles.section__articles__full}>
                lorem
            </div>
            <div className={styles.section__articles__full}>
                lorem
            </div>
        </div>
    );
}