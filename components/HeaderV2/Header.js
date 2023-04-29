import React, { useState } from "react";
import styles from "@/styles/HeaderV2/Header.module.scss";


export default function Header({section="None", minimized=false}) {
    const [searchIsClicked, setSearchIsClicked] = useState(true);

    const clickedSearch = () => {
        setSearchIsClicked(prevValue => !prevValue);
    }

    const setNavbar = (searchIsClicked) ? (
        <>
            <input/>
        </>
    ) : (
        <>
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

            <div className={`${styles.navbar__option__wrapper} ${styles.navbar__dropdown__wrapper}`}>
                <a href="/section/university">More</a>
                <div className={styles.dropdown__options__list}>
                    <div className={styles.dropdown__option__wrapper}>
                        <a href="/section/university">Contact Us</a>
                    </div>
                    <div className={styles.dropdown__option__wrapper}>
                        <a href="/section/university">Web Specials</a>
                    </div>
                    <div className={styles.dropdown__option__wrapper}>
                        <a href="/section/university">Pop Town</a>
                    </div>
                    <div className={styles.dropdown__option__wrapper}>
                        <a href="/section/university">Painting with Lights</a>
                    </div>
                </div>
                
            </div>
        </>
    );

    return (
        <div className={styles.header__wrapper__full}>

            <div className={styles.header__logo__wrapper}>
                <a href="/">
                    <img className={styles.logo__image__img} src="/media/svg/logo--tls--full.svg"/>
                </a>
            </div>

            <div className={styles.header__navbar__wrapper}>
                {setNavbar}

                <div className={styles.navbar__button__wrapper} onClick={clickedSearch}>
                    <svg className={styles.button__icon__search} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                        <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
                    </svg>
                </div>
            </div>

        </div>
    );
}