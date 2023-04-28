//detailed__full__right
import styles from "@/styles/ArticleCards/card__out/ArticleCard.module.scss";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import dehtml from "@/components/Functions/dehtml";
import shorten from "@/components/Functions/shorten";

export default function ArticleCard({
    article,
    textAlignment = "left",
    textLocation = "bottom",
    hasHeadline = true,
    hasAuthor = true,
    hasSnippet = true,
    hasImage = true,
    isMobile = false,
    isBanner = false,
 }) {

    const wordCount = (isMobile || !isBanner) ? 20 : 30;
    const headline = dehtml(article.title["rendered"]);
    const authorsList = createAuthorsList(article.authors, "link");
    const snippet = shorten(dehtml(article.excerpt["rendered"]), wordCount);

    const setTextAlignment = () => {
        if(textAlignment == "left") return styles.is__left; 
        else if(textAlignment == "right") return styles.is__right; 
        else if(textAlignment == "center") return styles.is__center;
        else if(textAlignment == "justified") return styles.is__justified;
        else return styles.is__left;
    }

    const setTextLocation = () => {
        if(textLocation == "left") return styles.is__left; 
        else if(textLocation == "right") return styles.is__right; 
        else if(textLocation == "bottom") return styles.is__bottom;
        else if(textLocation == "top") return styles.is__top;
        else return styles.is__bottom;
    }

    const setTextSize = (property) => {
        if(property === "headline") return styles.is__primary;
        if(property === "author" && hasSnippet) return styles.is__tertiary; 
        if(property === "author" && !hasSnippet) return styles.is__secondary;
        if(property === "snippet") return styles.is__secondary;
        else return property.is__secondary;
    }

    const setImage = hasImage ? (
        <a className={`${styles.article__image__link}`} href={`/presents/${article.slug}`}>
            <div className={`${styles.article__image__wrapper} ${setTextLocation()}`}>
                <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
            </div>
        </a>
    ) : (
        null
    );

    const setHeadline = hasHeadline ? (
        <div className={`${styles.article__headline__wrapper} ${setTextSize("headline")}`}>
            <a className={styles.article__headline__link} href={`/presents/${article.slug}`}>
                {headline}
            </a>
        </div>
    ) : (
        null
    );

    const setAuthor = hasAuthor ? (
        <div className={`${styles.article__author__wrapper} ${setTextSize("author")}`}>by {authorsList}</div>
    ) : (
        null
    );

    const setSnippet = hasSnippet ? (
        <div className={`${styles.article__snippet__wrapper} ${setTextSize("snippet")}`}>{snippet}<a href={`/presents/${article.slug}`}>Read More</a></div>
    ) : (
        null
    ) ;
    
    return (
        <div className={`${styles.card__wrapper__full} ${setTextLocation()} ${isBanner ? styles.is__banner : null}`}>

            {setImage}

            <div className={`${styles.article__information__wrapper} ${setTextAlignment()}`}>
                {setHeadline}
                {setAuthor}
                {setSnippet}
            </div>

            
            
        </div>
    );
}