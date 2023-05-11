import {React, useEffect, useState} from "react";
import {default as BodyMobile} from "@/components/Body/article/Mobile/Body";
import {default as BodyFull} from "@/components/Body/article/Full/Body";

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