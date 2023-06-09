import React, { useEffect, useState } from "react";
import styles from "@/styles/HeaderV2/Mobile/Header.module.scss";
import { useRouter } from "next/router";

export default function Header({
    article,
    section = "None"
}) {
    const [settingsIsClicked, setSettingsIsClicked] = useState(false);
    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const router = useRouter();

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

    const logSearchInput = (event) => {
        let searchInput = event.target.value;
        if(event.key === "Enter" || event.keyCode === 13) {
            window.location = `/find/${encodeURI(searchInput)}`;
            return;
        }

        if(event.key === "Escape") {
            setSearchIsClicked(false);
        }
        return;
    }

    useEffect(() => {
        const searchBar = document.querySelector("."+styles.header__input__search);

        if(searchBar === null) {
            return;
        };
        
        searchBar.focus();
        searchBar.addEventListener("keyup", logSearchInput);
    },[searchIsClicked]);
    
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
                    <a className={styles.dropdown__item__link} href="/section/university">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 2000 2000" width="48">
                                <path d="M1356.67,1933.54c-368.09,148.32-917.71,64.68-1211.69-417.05C-131.55,1063.34-4.8,463.09,454.75,162.83,902.23-129.54,1502.35-19.13,1814.84,421.34c311.94,439.7,209.62,1013.52-153.42,1327.87-9.47-15.26-18.89-30.42-28.27-45.59-19.88-32.14-39.62-64.37-59.7-96.38-3.38-5.39-7.63-10.46-12.35-14.72-14.29-12.88-31.22-14.85-48.16-6.06-5.21,2.7-10.16,5.91-15.99,9.34-28.53-46.09-57.06-92.18-86.55-139.81,2.67-2.09,5.72-4.07,8.3-6.56,97.83-93.99,159.33-207.83,185.33-340.82,11.3-57.78,14.02-116.27,8.29-174.75-14.25-145.54-71.56-271.99-172.24-378.17-88.35-93.18-196.15-152.59-321.15-180.81-39.6-8.94-79.8-13.47-120.52-14.29-159.42-3.22-300.38,46.68-422.26,148.64-107.83,90.21-176.55,205.28-208.41,342.19-9.65,41.48-14.74,83.55-15.41,126.25-2.72,174.08,56.04,324.5,175.19,450.73,91.47,96.9,203.99,156.8,334.61,182.95,55.81,11.17,112.02,13.87,168.74,9.98,58.35-4.01,114.82-16.41,169.59-36.64,6.59-2.44,9.53-1.32,13.14,4.6,26.65,43.73,53.69,87.21,81.05,131.49-3.36,2.25-6.47,4.38-9.63,6.42-25.13,16.22-30.85,40.31-15.2,65.77,26.69,43.39,53.6,86.64,80.41,129.96,2.17,3.5,4.27,7.04,6.44,10.63Z"/><path d="M983.57,465.88c301.46,1.77,531.31,248.29,525.23,536.48-6.12,290.02-245.82,520.69-535.75,514.78-286.19-5.83-515.58-238.28-515.15-525.16,.45-298.61,241.31-525.72,525.67-526.1Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            University
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="/section/menagerie">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 2000 2000" width="48">
                                <path d="M1200.37,1981.88c-3.66-22.47-4.69-44.15-11.06-64.12-8.69-27.21-7.13-54.65-8.03-82.17-1.32-40.64-2.24-81.3-3.63-121.94-.13-3.91-1.32-8.82-3.88-11.44-11.38-11.61-12.83-26.5-14.07-41.16-4.55-53.87-9.14-107.75-12.53-161.71-2.51-40-3.41-80.12-4.58-120.2-.87-29.72-2.12-59.48-1.26-89.17,1.12-38.62,4.07-77.19,6.47-115.76,.34-5.5,2.03-10.91,3.09-16.37,.79,.58,1.58,1.16,2.37,1.74,2.13-1.85,5.71-3.4,6.15-5.59,2.13-10.67,4.27-21.46,4.83-32.29,1.19-22.96,.98-45.99,2.16-68.95,1.06-20.69-8.93-34.59-26.29-43.01-12.64-6.13-26.5-9.74-40.49-14.71,0-5.88-.32-13.1,.05-20.29,1.9-36.95,3.26-73.95,6.14-110.83,5.21-66.65,8.55-134.02,29.05-197.97,14.99-46.74,2.86-86.77-19.41-125.66-22.54-39.36-47.72-77.2-71.59-115.8-21.23-34.34-41.12-69.36-51.91-108.69-1.91-6.97-3.27-14.09-5.25-22.78v291.43c18.86,5.4,31.23,16.91,30.49,38.14-.69,19.6-12.61,30.19-31.05,35.03v355.24h-10.34v-9.96c0-112.05-.04-224.1,.1-336.14,0-6.14-.66-9.76-7.79-12.02-14.37-4.55-23.23-18.68-23.17-33.76,.07-15.46,9.38-29.15,24.07-34.08,4.59-1.54,6.92-2.86,6.91-8.35-.18-94.63-.13-189.26-1.31-284.16-.9,3.75-1.86,7.49-2.7,11.25-8.79,39.05-27.05,73.96-47.74,107.67-24.18,39.4-49.41,78.15-73.35,117.69-14.22,23.5-25.82,48.4-30.36,75.9-2.44,14.76-2.45,29.5,2.28,43.93,11.46,34.95,17.93,70.98,21.96,107.4,4.99,45.08,9.6,90.23,13.09,135.45,2.57,33.24,3.08,66.64,4.48,99.96,.03,.79-.37,1.61-.51,2.15-10.82,3.25-21.85,5.46-31.96,9.81-32.99,14.2-35.88,29.77-34.77,54.44,1.02,22.68,1.49,45.39,2.69,68.06,.44,8.33,2.03,16.63,3.56,24.86,.84,4.54,2.99,8.32,10.94,3.34,2.23,26.73,5.82,51.73,6.1,76.77,.68,60.3,.83,120.65-.73,180.93-1.48,57.15-4.67,114.29-8.57,171.34-2.27,33.19-7.38,66.18-11.34,99.24-.29,2.43-.84,5.57-2.47,6.98-12.4,10.7-11.47,25.29-11.9,39.43-.97,32.52-1.75,65.05-2.6,97.58-.57,21.87-1.12,43.74-1.7,65.61-.04,1.4,.13,2.96-.43,4.15-10.85,23.03-13.23,47.79-15.07,72.68-.03,.45-.66,.86-1.02,1.28C344.34,1877.31-10.84,1479.23,.25,978.06,12.34,432.23,461.94-9.52,1017.92,.16c520.65,9.06,936.18,412.25,978.08,911.68,23.6,281.32-57.02,531.37-241.42,745.37-147.46,171.13-334.21,277.73-554.2,324.67Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            Menagerie
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="/section/sports">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 2000 2000" width="48">
                                <path d="M472.24,151.27c120.26,275.87,240.48,551.65,360.99,828.1-4.36,.35-7.96,.27-11.4,.97-16.03,3.28-24.28,13.65-24.29,30.38-.03,41.52-.04,83.05,0,124.57,.02,19.2,9.59,30.07,28.4,31.32,10.54,.7,21.17,.13,32.57,.13,.21,4.42,.46,7.4,.47,10.37,.03,21.88-.2,43.77,.16,65.65,.1,6.09-1.66,9.2-7.3,12.12-96.81,49.92-158.97,127.89-179.51,234.78-21.49,111.81,7.54,211.43,85.89,295.11,50,53.4,111.82,86.87,183.82,98.38,109.82,17.55,206.84-11.21,288.3-87.86,53.72-50.55,86.74-113,98.51-185.62,23.75-146.56-47.53-286.75-179.58-353.68-6.82-3.46-8.92-7.2-8.75-14.55,.51-21.31,.18-42.64,.18-63.97,0-3.02,0-6.03,0-10.77,11.72,0,22.62,.6,33.44-.14,17.52-1.19,27.37-12.26,27.39-29.75,.04-40.68-.21-81.37,.12-122.05,.14-16.98-5.5-29.48-23.66-34.98,119.69-274.57,239.21-548.74,358.76-822.99,342.35,214.43,535.08,636.09,438.4,1065.02-101.5,450.34-507.66,788.5-998.23,777.93-454.11-9.78-846.02-325.08-949.94-769.97C-78.83,776.69,137.09,355.77,472.24,151.27Z"/><path d="M661.88,58.24c229.65-78.8,457.54-77.65,686.1,3.58-114.22,262.02-227.91,522.82-342.27,785.15-114.84-263.44-229.03-525.38-343.83-788.73Z"/><path d="M981.41,979.87c131.9-302.74,263.26-604.27,394.99-906.62,13.86,5.95,26.87,11.53,40.69,17.46-3.76,8.76-7.29,17.11-10.91,25.42-94.34,216.35-188.7,432.68-283.03,649.03-24.34,55.82-48.65,111.64-72.92,167.49-5.89,13.56-11.77,27.14-17.25,40.88-1.98,4.96-4.75,6.61-10.03,6.47-13.44-.38-26.89-.13-41.53-.13Z"/><path d="M537.48,113.19c126.08,289.24,251.66,577.31,377.8,866.66-15.83,0-30.54,.27-45.21-.3-2.11-.08-4.82-3.91-5.98-6.56-25.26-57.57-50.32-115.22-75.44-172.85-95.45-218.97-190.86-437.96-286.54-656.82-3.08-7.04-2.13-10.18,4.49-13.42,10.28-5.03,20.16-10.85,30.9-16.71Z"/><path d="M1471.84,118.01c11.69,6.62,23.02,13.25,34.56,19.47,5.03,2.71,2.76,5.85,1.35,9.1-13.03,29.97-26.08,59.92-39.14,89.88-106.94,245.29-213.91,490.57-320.69,735.93-2.52,5.8-5.49,7.88-11.75,7.63-12.82-.51-25.68-.15-40.02-.15,125.45-287.79,250.42-574.47,375.7-861.85Z"/><path d="M592.38,86.53c14.12-5.92,27.19-11.39,40.89-17.13,8.02,18.45,15.68,36.1,23.36,53.72,109.13,250.23,218.24,500.47,327.56,750.62,3.53,8.07,4.14,14.85,.21,22.88-6.84,13.99-12.76,28.42-19.68,44.05-124.33-285.2-248.13-569.19-372.35-854.15Z"/><path d="M1013.2,1250.56c131.25-.7,253.58,96.26,288.11,226.14,35.2,132.38-24.97,273.46-145.08,339.88-53.01,29.31-109.74,43.28-170.01,40.14-143.75-7.48-261.59-108.17-289.38-246.37-25.88-128.7,40.53-263.85,158.79-324.27,45.92-23.46,94.41-35.65,157.55-35.52Zm-11.51,8.08c-13.12,.89-26.36,.97-39.34,2.8-72.06,10.16-134.25,40.48-183.44,94.44-67.98,74.58-93.43,162.45-71.38,261.01,34.78,155.49,186.39,252.32,341.89,227.7,71.88-11.38,133.04-44.2,180.61-99.62,66.43-77.38,88.48-166.65,62.74-265.43-34.03-130.57-154.08-220.27-291.06-220.91Z"/><path d="M1058.57,1225.24c-12.99-1.58-25.43-3.09-38.33-4.65v-52.53h38.33v57.19Z"/><path d="M979.07,1168.47v52.08c-12.64,1.54-25.05,3.05-38.06,4.63v-56.71h38.06Z"/><path d="M1005.8,1269.31c125.53-.76,239.78,85.31,275.63,205.3,32.42,108.49-6.4,229.97-97.29,300.73-43.92,34.19-93.47,54.85-148.56,61.11-135.43,15.38-266.21-62.47-310.39-193.34-49.52-146.71,28.57-303.84,176.37-356.71,32.38-11.58,65.82-17.52,104.24-17.08Zm-3.79,8.54c-37.78,0-72.32,6.57-107.21,20.37-123.88,49.03-196.34,177.59-170.81,306.88,30.11,152.48,177.56,245.08,324.25,220.77,62.33-10.33,116.43-37.86,159.57-84.27,66.92-72.01,91.75-156.93,67.86-252.69-31.38-125.79-143.9-211.07-273.66-211.07Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            Sports
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="/section/vanguard">
                        <div className={styles.dropdown__item__button}>
                            <svg id="a" xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 2000 2000"><path d="M999.91,2000C431.95,1999.28-11.48,1529.62,.32,978.06,11.66,447.86,447.9-4.81,1010.03,.04c536.88,4.63,990.03,438.41,989.88,1000.33-.15,561.23-454.43,999.51-1000,999.64ZM745.91,494.74c6.14,7.66,11.82,14.85,17.63,21.93,6.73,8.21,6.99,9.53-.78,16.18-13.16,11.27-26.5,22.34-40.13,33.03-5.25,4.11-6.82,7.2-1.84,12.71,8.99,9.96,17.39,20.45,26.11,30.65,8.51,9.97,8.61,9.98,.42,20.23-38.76,48.5-77.56,96.97-116.35,145.44-33.9,42.36-67.93,84.62-101.56,127.19-5.03,6.37-10.93,10.29-17.84,14.28-14.43,8.35-30.1,16.44-41.12,28.45-29.5,32.14-45.18,70.15-37.97,114.94,8.15,50.57,34.53,87.45,82.07,108.27,3.24,1.42,6.88,3.2,8.92,5.89,16.38,21.6,32.38,43.49,48.55,65.24,85.25,114.66,170.57,229.26,255.75,343.97,56.66,76.31,113.13,152.76,169.68,229.16,4.46,6.02,7.63,6.14,12.38-.02,39.77-51.6,79.59-103.16,119.24-154.85,64.32-83.87,128.51-167.84,192.77-251.76,26.69-34.86,53.42-69.68,80.06-104.57,3.31-4.34,5.41-8.7,12.66-8.74,66.3-.29,132.59-1.14,198.89-1.84,3.25-.03,6.49-.28,10.9-.48v-113.48H1001.67c.88,38.9,1.72,76.17,2.57,113.69,54.67,.87,108.09,1.71,162.95,2.58-53.58,69.62-105.95,137.67-158.71,206.24-4.73-6.06-8.59-10.82-12.27-15.72-46.35-61.71-92.66-123.46-139.02-185.17-51.21-68.18-102.51-136.29-153.51-204.63-2.14-2.86-3.17-8.03-2.25-11.46,5.98-22.38,6.8-45.11,1.41-67.26-3.24-13.31-1.09-23.11,8.01-32.3,.98-.99,1.8-2.14,2.67-3.23,54.79-68.97,109.57-137.95,164.4-206.88,1.44-1.81,3.44-3.18,5.14-4.72,59.36,69.14,118.07,137.53,177.06,206.24,9.46-7.85,17.79-14.86,26.22-21.74,10.57-8.64,10.24-8.22,18.63,2.22,24.14,30.04,48.7,59.74,73.28,89.82,1.87-1.4,3.46-2.48,4.94-3.7,36.94-30.36,73.86-60.75,110.81-91.1,8.64-7.1,17.51-13.92,26.05-21.15,5.27-4.46,8.35-8.78,1.89-15.77-10.81-11.68-20.47-24.42-30.6-36.73-15.62-18.98-31.23-37.97-47.82-58.15,10.3-9.33,20.22-18.31,30.35-27.49-3.31-4.25-5.58-7.42-8.11-10.38-21.26-24.88-42.55-49.73-63.85-74.57-89.19-104.05-178.42-208.06-267.5-312.21-3.78-4.42-6.11-3.04-9.51-.08-12.86,11.21-25.97,22.14-38.75,33.43-3.85,3.4-6.74,3.35-9.75-.61-4.73-6.22-9.23-12.64-14.24-18.63-4.13-4.94-3.32-7.71,2.19-10.99,13.63-8.12,13.98-10.77,4.04-22.87-28.4-34.58-56.88-69.09-85.35-103.62-4.73-5.73-9.52-11.41-14.34-17.18-6.86,4.86-12.61,8.93-19.54,13.85-3.49-20.31-6.71-38.99-10.31-59.93-52.61,43.51-102.98,85.16-154.86,128.07,20.94,7.1,39.04,13.24,59.29,20.12-9.35,7.73-16.9,13.99-24.39,20.19,.73,1.32,1.04,2.12,1.56,2.76,34.24,42.04,68.5,84.05,102.74,126.09,3.1,3.8,6.14,4.03,9.94,.78,3.97-3.39,8.35-6.31,12.77-9.6Z"/><path d="M577.79,1176.95c42.36-.19,71.55-22.11,98.66-48.85,25.48,33.77,50.42,66.74,75.28,99.78,74.46,98.96,148.85,197.98,223.36,296.9,7.73,10.27,15.94,20.2,24.26,29.99,3.19,3.76,7.33,6.71,11.59,10.53,2.5-3.22,4.49-5.78,6.46-8.35,66.53-86.72,133.04-173.46,199.69-260.09,1.6-2.07,4.8-4.11,7.27-4.13,42.49-.23,84.97-.14,127.46-.09,.75,0,1.5,.41,3.3,.93-116.51,151.97-232.67,303.49-350.33,456.96-142.52-191.44-284.03-381.51-427.02-573.59Z"/><path d="M674.66,954.11c-23.71-26.28-51.53-43.92-88.2-49.17,62.66-78.32,123.48-154.34,185.73-232.16,22.42,26.24,43.73,51.19,65.33,76.48-54.25,68.24-107.98,135.82-162.86,204.85Z"/><path d="M1262.59,913.82c-2.63,2.94-4.55,5.72-7.06,7.78-21.13,17.38-42.62,34.33-63.4,52.11-6.23,5.33-9.9,3.24-13.76-1.5-14.42-17.75-28.66-35.64-43.49-54.14,2.11-2.41,3.95-5.2,6.41-7.24,21.53-17.77,43.29-35.27,64.7-53.18,5.07-4.24,7.6-4.02,11.82,1.36,14.45,18.43,29.59,36.32,44.78,54.81Z"/><path d="M802.56,491.4c-7.35-9.19-14.07-17.59-21.53-26.92,13.64-10.89,27-21.56,40.92-32.67,7.07,8.56,13.57,16.43,21.21,25.67-13.47,11.25-26.61,22.23-40.6,33.92Z"/></svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            Vanguard
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="/section/opinion">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 2000 2000">
                                <path d="M.2,999.25C-.94,451.9,446.97-9.88,1019.25,.16c541.45,9.5,982.05,452.52,980.55,1003.98-1.48,545.05-447.37,1006.5-1020.76,995.67C437.89,1989.6-.54,1547.01,.2,999.25Zm444.92-95.93c2.4-1.27,3.84-2.13,5.36-2.82,55.72-25.29,111.49-50.44,167.15-75.87,53.36-24.38,106.79-48.6,159.78-73.76,24.1-11.44,28.01-29.86,12.17-51.42-9.94-13.53-21.12-26.15-31.38-39.45-10.2-13.23-26.91-14.99-40.84-8.54-121.94,56.47-243.91,112.88-365.76,169.55-8.97,4.17-19.72,8.33-25.01,15.79-12.05,16.99-22.47,35.45-31.2,54.39-7.81,16.93-3.84,33.83,9.72,47,10.01,9.73,20.72,18.95,32.05,27.1,71.88,51.66,143.98,103.04,216.11,154.35,29.42,20.93,59.19,41.38,88.65,62.27,13.6,9.65,36.12,10.75,43.87-5.86,8.25-17.7,16.9-35.32,23.55-53.63,7.66-21.09,3.18-32.14-15.39-45.16-46.1-32.31-92.26-64.54-138.4-96.79-36.48-25.5-72.98-50.99-110.43-77.15Zm1049.19,252.35c-2.9,1.46-5.09,2.66-7.36,3.69-103.75,47.31-207.54,94.53-311.21,142.04-8.48,3.89-16.71,8.91-23.95,14.77-15.09,12.21-14.19,25.3-3.57,40.75,9.17,13.36,19.51,25.94,29.63,38.63,13.7,17.17,26.45,20.08,46.54,10.71,96.51-45.02,192.93-90.22,289.51-135.11,29.58-13.75,59.57-26.61,89.25-40.13,3.41-1.55,7.02-4.2,8.91-7.32,10.53-17.45,20.82-35.05,30.64-52.9,5.45-9.9,6.84-20.74,2.92-31.63-5.91-16.44-18.92-26.8-32.43-36.5-73.98-53.12-147.87-106.37-222.16-159.07-33.09-23.48-66.68-46.29-100.7-68.38-16.71-10.85-31.38-5.91-39.97,12.29-7.5,15.87-14.31,32.15-20.11,48.71-7.49,21.41-3.43,32.47,15,45.37,58.07,40.64,116.23,81.18,174.34,121.77,24.78,17.31,49.53,34.67,74.73,52.32Zm-297.7-458.13c.29-7.6-4.58-17.34-15.44-23.12-10.84-5.77-22.06-10.88-33.35-15.7-16.75-7.16-32.26-4.55-44.32,9.2-8.44,9.62-16.25,20.12-22.5,31.27-89.89,160.36-179.38,320.95-269.15,481.37-34.84,62.25-70.12,124.26-105.3,186.33-7.63,13.45-11.02,27.91-11.8,43.21-.53,10.41,3.4,18.44,11.49,24.77,8.16,6.38,16.17,12.97,24.28,19.43,13.66,10.87,26.08,12.73,39.93,2.33,12.15-9.13,23.91-19.87,32.71-32.15,15.46-21.57,29.36-44.37,42.45-67.49,60.13-106.19,119.71-212.69,179.58-319.03,50.53-89.74,101.27-179.35,151.73-269.12,11.58-20.61,20.52-42.19,19.7-71.29Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            Opinion
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="/about-us">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            About Us
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="/contact-us">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            Contact Us
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="/web-specials">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 2000 2000">
                                <path d="M.2,999.25C-.94,451.9,446.97-9.88,1019.25,.16c541.45,9.5,982.05,452.52,980.55,1003.98-1.48,545.05-447.37,1006.5-1020.76,995.67C437.89,1989.6-.54,1547.01,.2,999.25Zm444.92-95.93c2.4-1.27,3.84-2.13,5.36-2.82,55.72-25.29,111.49-50.44,167.15-75.87,53.36-24.38,106.79-48.6,159.78-73.76,24.1-11.44,28.01-29.86,12.17-51.42-9.94-13.53-21.12-26.15-31.38-39.45-10.2-13.23-26.91-14.99-40.84-8.54-121.94,56.47-243.91,112.88-365.76,169.55-8.97,4.17-19.72,8.33-25.01,15.79-12.05,16.99-22.47,35.45-31.2,54.39-7.81,16.93-3.84,33.83,9.72,47,10.01,9.73,20.72,18.95,32.05,27.1,71.88,51.66,143.98,103.04,216.11,154.35,29.42,20.93,59.19,41.38,88.65,62.27,13.6,9.65,36.12,10.75,43.87-5.86,8.25-17.7,16.9-35.32,23.55-53.63,7.66-21.09,3.18-32.14-15.39-45.16-46.1-32.31-92.26-64.54-138.4-96.79-36.48-25.5-72.98-50.99-110.43-77.15Zm1049.19,252.35c-2.9,1.46-5.09,2.66-7.36,3.69-103.75,47.31-207.54,94.53-311.21,142.04-8.48,3.89-16.71,8.91-23.95,14.77-15.09,12.21-14.19,25.3-3.57,40.75,9.17,13.36,19.51,25.94,29.63,38.63,13.7,17.17,26.45,20.08,46.54,10.71,96.51-45.02,192.93-90.22,289.51-135.11,29.58-13.75,59.57-26.61,89.25-40.13,3.41-1.55,7.02-4.2,8.91-7.32,10.53-17.45,20.82-35.05,30.64-52.9,5.45-9.9,6.84-20.74,2.92-31.63-5.91-16.44-18.92-26.8-32.43-36.5-73.98-53.12-147.87-106.37-222.16-159.07-33.09-23.48-66.68-46.29-100.7-68.38-16.71-10.85-31.38-5.91-39.97,12.29-7.5,15.87-14.31,32.15-20.11,48.71-7.49,21.41-3.43,32.47,15,45.37,58.07,40.64,116.23,81.18,174.34,121.77,24.78,17.31,49.53,34.67,74.73,52.32Zm-297.7-458.13c.29-7.6-4.58-17.34-15.44-23.12-10.84-5.77-22.06-10.88-33.35-15.7-16.75-7.16-32.26-4.55-44.32,9.2-8.44,9.62-16.25,20.12-22.5,31.27-89.89,160.36-179.38,320.95-269.15,481.37-34.84,62.25-70.12,124.26-105.3,186.33-7.63,13.45-11.02,27.91-11.8,43.21-.53,10.41,3.4,18.44,11.49,24.77,8.16,6.38,16.17,12.97,24.28,19.43,13.66,10.87,26.08,12.73,39.93,2.33,12.15-9.13,23.91-19.87,32.71-32.15,15.46-21.57,29.36-44.37,42.45-67.49,60.13-106.19,119.71-212.69,179.58-319.03,50.53-89.74,101.27-179.35,151.73-269.12,11.58-20.61,20.52-42.19,19.7-71.29Z"/>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            Web Specials
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="/pop-town">
                        <div className={styles.dropdown__item__button}>
                        <svg id="a" xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 2000 2000">
                            <path d="M1269.64,1199.84c-24.38,29.46-41.16,63.66-49.47,101.76-14,64.24-1.13,123.91,31.82,179.96,16.47,28,37.59,52.29,59.25,76.29,34.13,37.81,65.13,77.96,86.51,124.63,12.11,26.43,20.76,53.78,17.84,83.56-1.09,11.12-4.2,21.28-11.41,30.05-4.4,5.36-8.39,11.05-13.42,17.73,34.23-4.99,64.36-16.55,92.1-34.36,65.82-42.25,105.25-102.74,117.54-179.33,20.67-128.85-6.63-247.14-84.55-352.64-23.12-31.31-51.06-57.48-87.6-72.84-16.38-6.89-33.5-11.07-51.4-10.57-5.62,.16-7.55-1.84-8.75-7.19-23.89-106.85-46.68-213.97-72.37-320.39-28.32-117.32-58.32-234.25-89.42-350.87-42.85-160.63-91.13-319.66-145.58-476.78C1059.72,5.99,1058.94,3.05,1058.02,0c339.05,10.56,790.95,250.6,914.08,764.39,126.54,528.03-181.01,1005.35-611.64,1168.03-9.81-27.03-19.6-54.06-29.43-81.08-122.39-336.52-244.77-673.03-367.18-1009.54-36.29-99.77-72.64-199.53-109.07-299.25-1.4-3.83-3.48-7.68-6.13-10.75-96.92-112.1-193.95-224.1-290.93-336.15-1.05-1.22-1.67-2.81-2.5-4.23-.82,.39-1.64,.78-2.45,1.18-.48,23.96-1.1,47.92-1.43,71.88-.67,48.57-1.12,97.14-1.78,145.7-.46,33.96-1.03,67.92-1.68,101.88-.84,43.49-1.88,86.97-2.61,130.46-.07,4.04,1.06,8.29,2.45,12.14,98.48,271.16,197.03,542.31,295.61,813.43,63.51,174.66,127.08,349.29,190.61,523.94,.73,2.01,1.35,4.06,2.26,6.83-4.59,.45-8.45,1.28-12.26,1.13-39.48-1.47-79.06-1.76-118.4-4.95-102.5-8.31-200.9-33.86-295.54-73.99-127.7-54.15-239.37-131.57-334.88-232.14-115.28-121.38-195.35-262.84-240.04-424.26-13.08-47.22-22.2-95.21-28.3-143.85-7.32-58.39-9.27-116.98-6.12-175.58,7.06-131.12,38.21-256.42,94.7-375.11,70.66-148.47,171.79-272.29,302.78-371.44,102.73-77.76,216.6-133.12,340.89-167.05,6.21-1.69,7.68,1.11,9.38,5.82,49.12,136.08,103.86,269.91,161.26,402.67,65.42,151.32,134.23,301.09,206.39,449.3,50.38,103.47,102.01,206.32,153.58,310.44Z"/><path d="M1583.32,1491.72c-29.52-8.5-56.08-5.07-78.77,16.19-12.93,12.11-21.39,27.23-28.34,43.32-2.33,5.38-4.57,10.85-7.47,15.93-12.56,21.95-32.82,31.33-57.49,26.42-24.67-4.91-46.18-17.55-66.27-31.48-12.1-8.39-20.51-22.09-30.61-33.38-31.13-34.81-57.01-72.79-69.6-118.42-18.83-68.23-5.7-130.69,35.15-187.79,1.95-2.73,5.29-5.03,8.46-6.21,25.92-9.69,51.91-19.16,77.96-28.49,13.39-4.79,26.63-1.41,39.5,2.25,31.21,8.86,55.94,27.84,76.93,51.84,39.85,45.58,68.44,97.77,84.61,155.91,8.19,29.46,11.14,60.38,16.42,90.64,.13,.77-.22,1.62-.47,3.28Z"/><path d="M569.79,580.69c0-44.61-.11-89.23,.07-133.84,.06-14.29,.71-28.59,1.58-42.85,.14-2.24,2.49-5.51,4.56-6.28,30.31-11.3,60.83-22.05,91.09-33.49,5.82-2.2,8.14,.54,11.14,4.01,33.95,39.25,67.94,78.47,101.91,117.71,10.28,11.88,20.31,23.99,30.98,35.5,3.91,4.21,4.06,7.88,2.36,12.72-14.8,42.11-50.7,60.15-95.43,47.74-5.37-1.49-10.64-3.39-15.87-5.36-10.37-3.91-10.27-3.95-14.35,5.99-9.16,22.32-23.45,39.33-47.71,46-24.43,6.72-46.97-.59-69.15-9.7-1.71-.7-2.9-4.55-2.98-6.98-.32-10.38-.14-20.77-.14-31.16,.64,0,1.28,0,1.92,0Z"/>
                        </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            Pop Town
                        </div>
                    </a>
                </div>

                <div className={styles.dropdown__item__wrapper}>
                    <a className={styles.dropdown__item__link} href="/painting-with-lights">
                        <div className={styles.dropdown__item__button}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 2000 2000">
                                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><path d="M.17,999.99C-1.36,452.06,446.95-9.94,1019.35,.16c541.43,9.56,982.03,452.56,980.49,1004.07-1.53,545.02-447.44,1006.47-1020.9,995.58C437.77,1989.53-.2,1547.09,.17,999.99Zm357.84-348.74c-9.96,0-19.21-.67-28.33,.17-11.65,1.07-17.37,7.76-17.94,19.38-.36,7.28-.59,14.57-.57,21.86,.12,43.2,.43,86.4,.5,129.6,.31,192.72,.56,385.45,.84,578.17,.03,17.65,6.14,23.88,23.45,23.88,209.85,0,419.71-.02,629.56,.12,5.16,0,10.61,.97,15.42,2.79,32.32,12.23,65.62,20.38,99.97,23.65,59.11,5.62,116.54-2.11,172.2-23.03,5.83-2.19,12.41-3.37,18.65-3.38,130.74-.19,261.47-.14,392.21-.15,16.41,0,23.13-6.47,23.09-22.8-.05-16.25-.77-32.5-.77-48.76-.04-225.3,0-450.59,0-675.89,0-20.15-5.91-26.15-25.94-26.16-38.72-.03-77.43,0-116.15,0h-10.38c.77-8.94-3.23-17.56,7.43-22.13,2.07-.89,3.29-5.7,3.45-8.77,.46-8.67,.25-17.39,.14-26.08-.12-9.74-4.71-14.49-14.38-14.51-42.08-.08-84.17-.14-126.25,.16-3.82,.03-8.42,1.79-11.29,4.3-6.39,5.6-6.08,40.99,.98,45.35,9.53,5.88,5.83,13.45,5.85,21.69-18.28,0-35.92-.19-53.55,.11-5.36,.09-8.66-1.71-11.83-6.02-22.27-30.24-44.94-60.19-67.17-90.45-3.67-5-7.33-7.15-13.75-7.14-90.33,.24-180.67,.22-271,.04-5.91-.01-9.64,1.65-13.22,6.53-22.41,30.49-45.28,60.64-67.73,91.11-3.21,4.36-6.52,5.94-11.84,5.92-44.89-.19-89.78-.1-134.66-.14-2.65,0-5.3-.36-7.87-.54v-17.21c4.1,0,7.71,.23,11.28-.05,8.85-.68,14.78-6.31,15.03-15.08,.36-12.62,.41-25.26-.01-37.87-.34-9.96-6.42-15.85-15.89-15.86-51.62-.09-103.24-.1-154.86,0-11.05,.02-16.99,6.15-17.16,17.34-.17,10.94-.15,21.89-.01,32.83,.16,13.16,5.84,18.6,19.21,18.72,2.47,.02,4.93,0,7.69,0v17.01h-66.16c0-4.34,.28-7.99-.05-11.59-1.02-11.13-6.27-17.03-15.85-17.05-52.18-.12-104.37-.14-156.55,.02-9.63,.03-15.37,6.27-15.75,16.03-.16,4.14-.03,8.29-.03,13.9Z"/><path d="M865.67,1356.79H334V830.34h493.32c-64.37,79.66-94.2,169.8-86.93,271.04,7.25,101.04,50.19,185.45,125.28,255.41Z"/><path d="M1370.51,1356.56c142.54-126.22,176.18-359.1,38.78-526.03h254.56v526.03h-293.34Z"/><path d="M1118.41,744.92c177.35,.31,328.33,141.92,328.37,328.87,.04,187.86-153.77,332.44-335.97,328.71-173.77-3.56-324.54-145.62-321.55-334.63,2.86-180.69,150.23-322.97,329.16-322.95Zm4.1,606.99c147.13,2.7,278.16-118.13,279.12-276.33,.93-154.1-121.75-279.17-275.32-280.45-156.1-1.3-280.81,122.94-282.07,276.19-1.29,157.09,128.49,282.96,278.27,280.6Z"/><path d="M559.54,797.62h-148.79v-31.14h148.79v31.14Z"/><path d="M703.13,782.22c-.11,8.76-7.65,16.09-16.18,15.74-8.47-.35-15.05-7.38-14.99-16.02,.05-8.3,7.23-15.76,15.31-15.91,8.49-.17,15.97,7.48,15.86,16.19Z"/><path d="M1122.8,1344.35c-149.65,0-270.88-121.15-270.71-270.8,.17-151.3,124.29-273.33,276-270.62,146.51,2.62,266.19,123.34,265.59,271.7-.6,149.18-121.29,269.72-270.88,269.72Z"/></svg>
                            </svg>
                        </div>
                        <div className={styles.dropdown__item__text}>
                            Painting with Lights
                        </div>
                    </a>
                </div>

            </div>
            
        </div>
        
    );
}