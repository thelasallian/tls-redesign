//detailed__full__right
import styles from "@/styles/ArticleCards/card__out/ArticleCard.module.scss";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import dehtml from "@/components/Functions/dehtml";
import shorten from "@/components/Functions/shorten";

export default function ArticleCard({
    article,
    textAlignment = "left",
    textLocation = "bottom",
    hasAuthor = true,
    hasSnippet = true,
    hasImage = true,
    isMobile = false,
 }) {

    const wordCount = (isMobile) ? 15 : 30;
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
    
    return (
        <div className={`${styles.card__wrapper__full} ${setTextLocation()}`}>

            <a className={styles.article__image__link} href={`/presents/${article.slug}`}>
                <div className={styles.article__image__wrapper}>
                    <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
                </div>
            </a>

            <div className={`${styles.article__information__wrapper} ${setTextAlignment()}`}>
                <div className={styles.article__headline__wrapper}>
                    <a className={styles.article__headline__link} href={`/presents/${article.slug}`}>
                        {headline}
                    </a>
                </div>
                <div className={styles.article__author__wrapper}>by {authorsList}</div>
                <div className={styles.article__snippet__wrapper}>{snippet}<a href={`/presents/${article.slug}`}>Read More</a></div>
            </div>

            
            
        </div>
    );
}