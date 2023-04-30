import React, { useState, useEffect } from "react";
import {default as HeaderFull} from "./Full/Header";
import {default as HeaderMobile} from "./Mobile/Header";

export default function Header({article, section}) {
    const [isMobile, setIsMobile] = useState(false);

    const handlingWindowResize = () => {
        setIsMobile(window.innerWidth < 750);
    }
    
    useEffect(() => {
        setIsMobile(window.innerWidth < 750);
        window.addEventListener("resize", handlingWindowResize);
    },[]);


    const setHeader = (isMobile) ? (
        <HeaderMobile
            article={article}
            section={section}
        />
    ) : (
        <HeaderFull
            article={article}
            section={section}
        />
    );

    return (
        setHeader
    );
}