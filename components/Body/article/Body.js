import React from "react";
import styles from "@/styles/Body/article/Body.module.scss";


export default function Body({article, section}) {
    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.body__section__wrapper}>
                <div className={styles.content} dangerouslySetInnerHTML={{__html: article.content["rendered"]}}/>
            </div>
        </div>
    );
}