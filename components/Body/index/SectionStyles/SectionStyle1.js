import React from "react";
import styles from "@/styles/SectionStyles/SectionStyle1.module.scss";

export default function SectionStyle1({section}) {
    return (
        <div className={styles.section__area__wrapper}>
            <div className={styles.section__headline__wrapper}>{section.name}</div>
            <div className={styles.section__articles__wrapper}>
                <div className={styles.articles__primary__wrapper}>
                    primary article
                </div>
                <div className={styles.articles__secondary__wrapper}>
                    secondary wrapper
                </div>
            </div>
        </div>
    );
}