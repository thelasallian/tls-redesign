import React, { useEffect, useState } from "react";
import header from '@/styles/HeaderMobile.module.scss'


export default function HeaderMobile() {

    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const [settingsIsClicked, setSettingsIsClicked] = useState(false);

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

    //Single-responsibility useEffects
    useEffect(() => {
        if(searchIsClicked) {
            window.addEventListener("keydown", searchedSomething);
        } else {
            window.removeEventListener("keydown", searchedSomething);
        }
    });

    useEffect(() => {
        if(settingsIsClicked) {
            setSearchIsClicked(false);
            document.body.style.overflow = 'hidden';
        } else if(!settingsIsClicked) {
            document.body.style.overflow = 'visible';
        }
    },[settingsIsClicked]);

    useEffect(() => {
        if(searchIsClicked) setSettingsIsClicked(false);
    },[searchIsClicked]);

    const changeNavbarToSearchBar = () => {
        setSearchIsClicked(!searchIsClicked);
    };

    const openSettingsMenu = () => {
        setSettingsIsClicked(!settingsIsClicked);
    }

    return (
        <>
            <div className={header.logo__div__holder}>
                {/* no object inside */}
            </div>

            <div className={header.header__wrapper__mobile}>

            <div className={header.navbar__button__setting}>
                <svg className={header.navbar__image__setting} onClick={openSettingsMenu} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                    <path d="M110.391 831.827v-79.218h739.218v79.218H110.391Zm0-216.218v-79.218h739.218v79.218H110.391Zm0-216.218v-79.783h739.218v79.783H110.391Z"/>
                </svg>
            </div>

            <div className={header.logo__div__mobile}>
                { searchIsClicked ?
                    <>
                        <input id="navbar__text__search" className={header.navbar__text__search} type="text"/> 
                    </>:
                    <a className={header.logo__link__mobile} href="/">
                        <img id="header__logo__full" className={header.logo__image__mobile} src="/media/svg/logo--tls--compact.svg"/>
                    </a>
                }
                
            </div>
            
            { searchIsClicked?
                <div className={header.navbar__button__search}>
                    <svg className={header.navbar__image__search} onClick={changeNavbarToSearchBar} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                        <path d="M249 862.566 193.434 807l231-231-231-231L249 289.434l231 231 231-231L766.566 345l-231 231 231 231L711 862.566l-231-231-231 231Z"/>
                    </svg>
                </div>:
                <div className={header.navbar__button__search}>
                    <svg className={header.navbar__image__search} onClick={changeNavbarToSearchBar} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                        <path d="M795.435 950.827 529.043 685.001q-29.434 24.26-69.111 37.934-39.676 13.674-85.323 13.674-112.119 0-189.864-77.826Q106.999 580.957 106.999 471t77.827-187.783q77.826-77.826 188.283-77.826 110.456 0 187.782 77.826 77.327 77.826 77.327 187.933 0 43.98-13.152 83.133-13.153 39.152-39.457 73.587l267.392 265.391-57.566 57.566ZM373.808 657.391q77.659 0 131.425-54.533Q558.999 548.326 558.999 471q0-77.326-53.849-131.858-53.849-54.533-131.342-54.533-78.326 0-132.958 54.533Q186.218 393.674 186.218 471q0 77.326 54.549 131.858 54.549 54.533 133.041 54.533Z"/>
                    </svg>
                </div>
            }
            
            </div>
            {
                settingsIsClicked ?
                <nav className={header.settings__menu__mobile}>
                    <a className={header.settings__choices__link} href="/section/university">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>University</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/section/menagerie">
                        <div className={header.settings__menu__choice}>
                            
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Menagerie</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/section/sports">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Sports</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/section/vanguard">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Vanguard</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/section/opinion">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Opinion</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/about">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>About</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/contact-us">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Contact Us</div></div>
                        </div>
                    </a>
                    <a className={header.settings__choices__link} href="/specials">
                        <div className={header.settings__menu__choice}>
                            <div className={header.settings__menu__choices}><img className={header.settings__image__icon} src="/media/svg/icon--search.svg"/><div className={header.settings__text__choices}>Specials</div></div>
                        </div>
                    </a>
                </nav>:
                ""
            }
        </>
    );
}