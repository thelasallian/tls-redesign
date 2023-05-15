import React, { useState, useEffect } from "react";
import {default as HeaderFull} from "./Full/Header";
import {default as HeaderArticle} from "./Article/Header";
import {default as HeaderMobile} from "./Mobile/Header";

export default function Header({
    article, section="None"
}) {
    const [isMobile, setIsMobile] = useState(false);

    const handlingWindowResize = () => {
        setIsMobile(window.innerWidth < 750);
    }
    
    useEffect(() => {
        setIsMobile(window.innerWidth < 750);
        window.addEventListener("resize", handlingWindowResize);
    },[]);

    const setHeader = () => {
        if(isMobile) {
            return (
                <HeaderMobile
                    article={article}
                    section={section}
                />
            );
        }

        if(article != null) {
            return (
                <HeaderArticle
                    article={article}
                    section={section}
                />
            );
        }
        
        return (
            <HeaderFull
                section={section}
            />
        );
    }

    return (
        setHeader()
    );
}