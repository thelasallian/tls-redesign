import React from "react";
import styles from "@/styles/HeaderV2/Header.module.scss";


export default function Header({section="None", minimized=false}) {
    return (
        <div className={styles.header__wrapper__full}>

            <div className={styles.header__logo__wrapper}>
                <a href="/">
                    <img className={styles.logo__image__img} src="/media/svg/logo--tls--full.svg"/>
                </a>
            </div>

            <div className={styles.header__navbar__wrapper}>
                <div className={styles.navbar__option__wrapper}>
                    <a href="/section/university">University</a>
                </div>
                <div className={styles.navbar__option__wrapper}>
                    <a href="/section/university">University</a>
                </div>
                <div className={styles.navbar__option__wrapper}>
                    <a href="/section/university">University</a>
                </div>
                <div className={styles.navbar__option__wrapper}>
                    <a href="/section/university">University</a>
                </div>

                
            </div>

        </div>
    );
}