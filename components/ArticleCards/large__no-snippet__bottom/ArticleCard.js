//detailed__full__right
import styles from "@/styles/ArticleCards/large__no-snippet__bottom/ArticleCard.module.scss";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import dehtml from "@/components/Functions/dehtml";
import shorten from "@/components/Functions/shorten";

export default function ArticleCard({article, isCentered=false}) {
    const headline = dehtml(article.title["rendered"]);
    const authorsList = createAuthorsList(article.authors, "link");
    const excerpt = shorten(dehtml(article.excerpt["rendered"]), 30);

    return (
        <div className={styles.card__wrapper__full}>

            <a className={styles.article__image__link} href={`/presents/${article.slug}`}>
                <div className={styles.article__image__wrapper}>
                    <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
                </div>
            </a>

            <div className={styles.article__information__wrapper}>
                <div className={styles.article__headline__wrapper} style={{textAlign: isCentered ? "center" : ""}}>
                    <a className={styles.article__headline__link} href={`/presents/${article.slug}`}>
                        {headline}
                    </a>
                </div>
                <div className={styles.article__author__wrapper} style={{textAlign: isCentered ? "center" : ""}}>by {authorsList}</div>
            </div>


        </div>
    );
}