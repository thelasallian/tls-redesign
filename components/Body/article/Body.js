import {React, useState, useEffect} from "react";
import styles from "@/styles/Body/article/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import parseRelatedArticles from "@/components/Functions/parseRelatedArticles";
import dehtml from "@/components/Functions/dehtml";
import dayjs from "dayjs";

import {default as BodyFull} from "@/components/Body/article/full/Body";
import {default as BodyMobile} from "@/components/Body/article/mobile/Body";

export default function Body({article, section}) {
    const [isMobile, setIsMobile] = useState(false);

    const handlingWindowResize = () => {
        setIsMobile(window.innerWidth < 750);
    }
    
    useEffect(() => {
        setIsMobile(window.innerWidth < 750);
        window.addEventListener("resize", handlingWindowResize);
    },[]);

    const setBody = () => {
        if(isMobile) {
            return (
                <BodyMobile
                    article={article}
                    section={section}
                />
            );
        }
        
        return (
            <BodyFull
                article={article}
                section={section}
            />
        );
    }

    return (
        setBody()
    );
}