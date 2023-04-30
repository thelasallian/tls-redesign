import {React, useEffect} from "react";
import styles from "@/styles/Body/article/Body.module.scss";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import dehtml from "@/components/Functions/dehtml";
import dayjs from "dayjs";

export default function Body({article, section}) {
    const headline = dehtml(article.title["rendered"]);
    const authorsList = createAuthorsList(article.authors, "link");
    const dateCreated = dayjs(article.date).format("MMMM D, YYYY");

    const setBackgroundColor = () => {
        if (section === "University") return styles.university;
        else if (section === "Menagerie") return styles.menagerie;
        else if (section === "Sports") return styles.sports;
        else if (section === "Vanguard") return styles.vanguard;
        else if (section === "Opinion") return styles.opinion;
        else return null;

    }

    const logCurrentYValue = () => {
        const informationWrapper = document.querySelector("."+styles.body__information__wrapper);
        const currentYValue = window.pageYOffset;
        console.log(currentYValue);

        if(informationWrapper === null) return;

        const informationWrapperFullHeight = informationWrapper.offsetHeight + 300;
        

        if(currentYValue > informationWrapperFullHeight) {
            console.log("show headline");
        } else {
            console.log("dont show headline");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", logCurrentYValue);
    },[]);

    

    return (
        <div className={styles.body__wrapper__full}>
            <div className={`${styles.body__background__wrapper} ${setBackgroundColor()}`}>
                <img className={styles.background__image__img} src={article.jetpack_featured_media_url}/>
            </div>
            <div className={styles.body__foreground__wrapper}>
                <div className={styles.body__information__wrapper}>
                    <div className={styles.body__headline__wrapper}>{headline}</div>
                    <div className={styles.body__author__wrapper}>by {authorsList}</div>
                    <div className={styles.body__date__wrapper}>{dateCreated}</div>
                </div>
                <div 
                    className={styles.body__content__wrapper} 
                    dangerouslySetInnerHTML={{__html: article.content.rendered}}
                />
            </div>
        </div>
    );
}