import React, { useEffect, useState } from "react";
import styles from "@/styles/Body/Index/BodyFull.module.scss";
import BannerArticleFull from "@/components/ArticleCards/BannerArticleFull";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



export default function BodyFull({sections}) {
    const bannerArticles = sections.map(section => section.articles[0]);

    const bannerArticleCards = bannerArticles.map(bannerArticle =>
        <SwiperSlide><BannerArticleFull key={bannerArticle.id} article={bannerArticle}/></SwiperSlide>
    );

    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.section__banners__full}>
                <Swiper
                    loop={true}
                    autoplay={{
                      delay: 2500,
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