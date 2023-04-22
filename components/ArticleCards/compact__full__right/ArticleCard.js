//style__amount of detail__where the text is with respect to image
import styles from "@/styles/ArticleCards/compact__full__right/ArticleCard.module.scss";
import dehtml from "@/components/Functions/dehtml";
import shorten from "@/components/Functions/shorten";
import createAuthorsList from "@/components/Functions/createAuthorsList";

export default function ArticleCard({article}) {
    const headline = dehtml(article.title["rendered"]);
    const authorsList = createAuthorsList(article.authors, "link");

    return (
        <div className={styles.card__wrapper__full}>

            <a className={styles.article__image__link} href={`/presents/${article.slug}`}>
                <div className={styles.article__image__wrapper}>
                    <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
                </div>
            </a>
            

            <div className={styles.article__information__wrapper}>
                <div className={styles.article__headline__wrapper}>
                    <a className={styles.article__headline__link} href={`/presents/${article.slug}`}>
                        {headline}
                    </a>
                </div>
                <div className={styles.article__author__wrapper}>by {authorsList}</div>
            </div>
            
        </div>
    );
}


{/* <div className={styles.article__headline__wrapper}>{headline}</div>
<div className={styles.article__authors__wrapper}>by {authorsList}</div> */}