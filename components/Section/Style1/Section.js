import React, { useEffect, useState } from "react";
import styles from "@/styles/Section/Style1/Section.module.scss";

export default function Section({section}) {

    return (
        <div className={styles.section__wrapper__full}>

            <div className={styles.section__title__wrapper}>
                <a className={styles.section__title__link} id={styles[`${section.name.toLowerCase()}`]} href={`/section/${section.name.toLowerCase()}`}>{section.name}</a>
            </div>

            <div className={styles.section__articles__wrapper}>
                <div className={styles.articles__left__wrapper}>
                    left
                </div>
                <div className={styles.articles__right__wrapper}>
                    right
                </div>
            </div>

        </div>
    );
}