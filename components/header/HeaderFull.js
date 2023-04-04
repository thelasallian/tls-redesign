import React, { useEffect, useState } from "react";
import header from '@/styles/HeaderFull.module.scss'


export default function HeaderFull() {

    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const [pageYOffset, setPageYOffset] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const searchedSomething = (event) => {
        const searchBar = document.getElementById("navbar__text__search");

        if(searchBar != null) {
            const searchEntry = searchBar.value.trim();
            if(event.key == "Enter" && searchEntry != "") {
                console.log("Searching:",searchEntry);
            } else if(event.key == "Escape") {
                setSearchIsClicked(!searchIsClicked);
            }
        }
    }

    const logPageYOffset = () => {
        setPageYOffset(window.pageYOffset);
    }

    const handlingWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    //Single-responsibility useEffects
    useEffect(() => {
        if(searchIsClicked) {
            window.addEventListener("keydown", searchedSomething);
        } else {
            window.removeEventListener("keydown", searchedSomething);
        }
    });

    useEffect(() => {
        window.addEventListener("scroll", logPageYOffset);
        const logo = document.getElementById("header__logo__full");
        const navbar = document.getElementById("header__navbar__full");
        const options = document.getElementById("more__list__container");

        setIsNavbarVisible(pageYOffset < logo.offsetHeight);

        if(isNavbarVisible) {
            navbar.classList.remove(header.sticky);
            if(options != null) options.classList.remove(header.sticky__for__more__options);
        } else {
            navbar.classList.add(header.sticky);
            if(options != null) options.classList.add(header.sticky__for__more__options);
        }
    });

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handlingWindowResize);
    });

    const changeNavbarToSearchBar = () => {
        setSearchIsClicked(!searchIsClicked);
    };

    return (
        <div className={header.header__wrapper__full}>

            <div className={header.logo__div__full}>
                <a className={header.logo__link__full} href="/">
                    <img id="header__logo__full" className={header.logo__image__full} src="/media/svg/logo--tls--full.svg"/>
                </a>
            </div>
            
            <nav id="header__navbar__full" className={header.header__navbar__full}>
                { searchIsClicked ? 
                    <>
                        <input id="navbar__text__search" className={header.navbar__text__search} type="text"/> 
                        <div className={header.navbar__button__search}>
                            <svg onClick={changeNavbarToSearchBar} className={header.button__search__icon} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                            </svg>
                        </div>
                    </>:
                    <>
                        {
                            isNavbarVisible?
                            "" :
                            <>
                            <div className={header.navbar__button__section}>
                                <a href="/" className={header.logo__link__visible}>
                                    { (windowWidth < 900) ? 
                                        <img className={header.logo__image__star} src="/media/svg/icon--tls--star.svg"/>: 
                                        <img className={header.logo__image__compact} src="/media/svg/logo--tls--compact.svg"/>
                                    }
                                </a>
                            </div>
                            </>
                        }
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/university">University</a></div>
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/menagerie">Menagerie</a></div>
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/sports">Sports</a></div>
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/vanguard">Vanguard</a></div>
                        <div className={header.navbar__button__section}><a className={header.navbar__link__section} href="/section/opinion">Opinion</a></div>
                        <div className={header.navbar__button__section}>
                            <div className={header.more__button__container}>
                                <a className={header.more__link__container} href="/about">
                                    More
                                    <svg className={header.more__dropdown__icon} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                        <path d="M480 697.537 253.847 471.385l32.615-32.615L480 632.924l193.538-193.539L706.153 472 480 697.537Z"/>
                                    </svg>
                                </a>
                            </div>

                            <div id="more__list__container" className={header.more__list__container}>
                                <div className={header.more__div__container}>
                                    <a className={header.more__link__option} href="/about">About</a>
                                </div>
                                <div className={header.more__div__container}>
                                    <a className={header.more__link__option} href="/contact-us">Contact Us</a>
                                </div>
                                <div className={header.more__div__container}>
                                    <a className={header.more__link__option} href="/specials/">Specials</a>
                                </div>
                            </div>

                        </div>
                        <div className={header.navbar__button__search}>
                            <svg className={header.button__search__icon} onClick={changeNavbarToSearchBar} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
                            </svg>
                        </div>
                    </>
                }
            </nav>

        </div>
    );
}