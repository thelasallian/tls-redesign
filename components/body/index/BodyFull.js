import React, { useEffect, useState } from "react";
import styles from "@/styles/Body/Index/BodyFull.module.scss";
import BannerArticle from "@/components/ArticleCards/BannerArticle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function BodyFull({sections}) {
    // const bannerArticles = sections.map(section => section.articles[0]);
    // const bannerArticleCards = bannerArticles.map(bannerArticle => <BannerArticle key={bannerArticle.id} article={bannerArticle}/>);

    const [windowWidth, setWindowWidth] = useState(0);

    let bannerArticle;

    const handlingWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    //Single-responsibility useEffects
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handlingWindowResize);
    },[]);

    if(windowWidth < 750) {
        
    } else {

    }
    
    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.section__banners__full}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <BannerArticle article={sections[0].articles[0]}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerArticle article={sections[1].articles[0]}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerArticle article={sections[2].articles[0]}/>
                </SwiperSlide>
            </Swiper>
            </div>
            <div className={styles.section__articles__full}>
                lorem
            </div>
        </div>
    );
}