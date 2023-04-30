import React, { useEffect, useState } from "react";
import styles from "@/styles/HeaderV2/Mobile/Header.module.scss";

export default function Header({
    article,
    section = "None"
}) {
    const [settingsIsClicked, setSettingsIsClicked] = useState(false);
    const [searchIsClicked, setSearchIsClicked] = useState(false);

    const handleSettingsOnClick = () => {
        setSettingsIsClicked(prevState => !prevState);
        setSearchIsClicked(false);
    }

    const handleSearchOnClick = () => {
        setSearchIsClicked(prevState => !prevState);
        setSettingsIsClicked(false);
    }

    const setLogo = (searchIsClicked) ? (
        <input className={styles.header__input__search} type="text"/>
    ) : (
        <a href="/">
            {
                (section === "None") ? (
                    <img className={styles.logo__image__img} src="/media/svg/logo__tls__compact.svg"/>
                ) : (
                    <img className={styles.logo__image__img} src="/media/svg/logo__tls__compact__white.svg"/>
                )
            }
        </a>
    );

    const setSearchIcon = (searchIsClicked) ? (
        <svg className={styles.button__icon__search} onClick={handleSearchOnClick} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
        </svg>
    ) : (
        <svg className={styles.button__icon__search} onClick={handleSearchOnClick} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
            <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
        </svg>
    );

    useEffect(() => {
        const dropdownWrapper = document.querySelector("."+styles.header__dropdown__wrapper);
        if(settingsIsClicked) {
            dropdownWrapper.classList.remove(styles.is__hidden);
        } else {
            dropdownWrapper.classList.add(styles.is__hidden);
        }
    },[settingsIsClicked]);

    const setSectionColor = () => {
        if (section === "University") return styles.university;
        else if (section === "Menagerie") return styles.menagerie;
        else if (section === "Sports") return styles.sports;
        else if (section === "Vanguard") return styles.vanguard;
        else if (section === "Opinion") return styles.opinion;
        else return null;
    }
    
    return (
        <div className={`${styles.header__wrapper__full} ${setSectionColor()}`}>

            <div className={styles.header__setting__wrapper}>
                <div className={styles.navbar__button__wrapper}>
                    <svg className={styles.button__icon__setting} onClick={handleSettingsOnClick} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                        <path d="M110.391 831.827v-79.218h739.218v79.218H110.391Zm0-216.218v-79.218h739.218v79.218H110.391Zm0-216.218v-79.783h739.218v79.783H110.391Z"/>
                    </svg>
                </div>
            </div>

            <div className={styles.header__logo__wrapper}>
                {setLogo}
            </div>

            <div className={styles.header__search__wrapper}>
                <div className={styles.navbar__button__wrapper}>
                    {setSearchIcon}
                </div>
            </div>

            <div className={`${styles.header__dropdown__wrapper} ${styles.is__hidden}`}>
                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            University
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            University
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            University
                        </div>
                    </a>
                </div>
            </div>
        </div>
        
    );
}