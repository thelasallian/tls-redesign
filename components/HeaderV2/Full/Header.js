import React, { useEffect, useState } from "react";
import styles from "@/styles/HeaderV2/Full/Header.module.scss";


export default function Header({
    article,
    section = "None"
}) {
    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const [navbarIsSticky, setNavbarIsSticky] = useState(false);
    const [isCompact, setIsCompact] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const compactWindowSize = 1050;

    const clickedSearch = () => {
        setSearchIsClicked(prevValue => !prevValue);
    }

    const setSearchIcon = (searchIsClicked) ? (
        <svg className={styles.button__icon__search} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
        </svg>
    ) : (
        <svg className={styles.button__icon__search} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
            <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
        </svg>
    );

    const setStickyLogo = () => {
        if(navbarIsSticky && section === "None") {
            return (
                <div className={styles.navbar__logo__wrapper}>
                    <a href="/">
                        {(isCompact) ? (
                            <img className={styles.logo__image__star} src="/media/svg/icon__tls__star.svg"/>
                        ) : (
                            <img className={styles.logo__image__img} src="/media/svg/logo__tls__compact.svg"/>
                        )}
                    </a>
                </div>
            );
        } else if(navbarIsSticky && section !=- "None") {
            return (
                <div className={styles.navbar__logo__wrapper}>
                    <a href="/">
                        {(isCompact) ? (
                            <img className={styles.logo__image__star} src="/media/svg/icon__tls__star__white.svg"/>
                        ) : (
                            <img className={styles.logo__image__img} src="/media/svg/logo__tls__compact__white.svg"/>
                        )}
                    </a>
                </div>
            );
        } else {
            return null;
        }
    }

    const searchInput = (event) => {
        const input = event.target.value;
        setSearchValue(input);
    }

    const setNavbar = (searchIsClicked) ? (
        <>
            <input className={styles.navbar__input__search} onChange={() => searchInput(event)}/>
        </>
    ) : (
        <>
            {setStickyLogo()}

            <div className={styles.navbar__option__wrapper}>
                <a href="/section/university">University</a>
            </div>

            <div className={styles.navbar__option__wrapper}>
                <a href="/section/menagerie">Menagerie</a>
            </div>

            <div className={styles.navbar__option__wrapper}>
                <a href="/section/sports">Sports</a>
            </div>

            <div className={styles.navbar__option__wrapper}>
                <a href="/section/vanguard">Vanguard</a>
            </div>

            <div className={styles.navbar__option__wrapper}>
                <a href="/section/opinion">Opinion</a>
            </div>

            <div className={`${styles.navbar__option__wrapper} ${styles.navbar__dropdown__wrapper}`}>
                <a>
                    More
                    <svg className={styles.button__icon__more} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                        <path d="M480 697.537 253.847 471.385l32.615-32.615L480 632.924l193.538-193.539L706.153 472 480 697.537Z"/>
                    </svg>
                </a>
                
                <div className={styles.dropdown__options__list}>
                    <div className={styles.dropdown__option__wrapper}>
                        <a href="/about-us">About Us</a>
                    </div>

                    <div className={styles.dropdown__option__wrapper}>
                        <a href="/contact-us">Contact Us</a>
                    </div>
                    <div className={styles.dropdown__option__wrapper}>
                        <a href="/web-specials">Web Specials</a>
                    </div>
                    <div className={styles.dropdown__option__wrapper}>
                        <a href="/pop-town">Pop Town</a>
                    </div>
                    <div className={styles.dropdown__option__wrapper}>
                        <a href="/painting-with-lights">Painting with Lights</a>
                    </div>
                </div>
                
            </div>
        </>
    );

    const setSectionColor = () => {
        if (section === "University") return styles.university;
        else if (section === "Menagerie") return styles.menagerie;
        else if (section === "Sports") return styles.sports;
        else if (section === "Vanguard") return styles.vanguard;
        else if (section === "Opinion") return styles.opinion;
        else return null;
    }

    const logCurrentYValue = () => {
        const headerWrapper = document.querySelector("."+styles.header__wrapper__full);
        const navbarWrapper = document.querySelector("."+styles.header__navbar__wrapper);

        if(headerWrapper === null) return;

        const headerWrapperFullHeight = headerWrapper.offsetHeight;
        const navbarWrapperFullHeight = navbarWrapper.offsetHeight;
        const navbarStartingYValue = parseFloat(headerWrapperFullHeight - navbarWrapperFullHeight);

        const currentYValue = window.pageYOffset;

        if(currentYValue > navbarStartingYValue) {
            navbarWrapper.classList.add(styles.is__sticky);
            setNavbarIsSticky(true);
        } else {
            navbarWrapper.classList.remove(styles.is__sticky);
            setNavbarIsSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", logCurrentYValue);
    },[]);

    const handleWindowResize = () => {
        setIsCompact(window.innerWidth < compactWindowSize);
    }

    useEffect(() => {
        setIsCompact(window.innerWidth < compactWindowSize);
        window.addEventListener("resize", handleWindowResize);
    },[]);

    return (
        <div className={`${styles.header__wrapper__full} ${setSectionColor()}`}>

            <div className={styles.header__logo__wrapper}>
                <a href="/">
                    <img className={styles.logo__image__img} src="/media/svg/logo--tls--full.svg"/>
                </a>
            </div>

            <div className={`${styles.header__navbar__wrapper} ${setSectionColor()}`}>

                {setNavbar}

                <div className={styles.navbar__button__wrapper} onClick={clickedSearch}>
                    {setSearchIcon}
                </div>
            </div>

        </div>
    );
}