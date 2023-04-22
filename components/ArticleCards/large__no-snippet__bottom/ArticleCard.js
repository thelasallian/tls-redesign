//detailed__full__right
import styles from "@/styles/ArticleCards/large__no-snippet__bottom/ArticleCard.module.scss";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import dehtml from "@/components/Functions/dehtml";
import shorten from "@/components/Functions/shorten";

export default function ArticleCard({article, isCentered=false, direction="bottom"}) {
    const headline = dehtml(article.title["rendered"]);
    const authorsList = createAuthorsList(article.authors, "link");
    const excerpt = shorten(dehtml(article.excerpt["rendered"]), 30);

    const flexDirection = () => {
        switch(direction) {
            case "bottom": return "column";
            case "right": return "row";
            case "left": return "row";
            default: return "column";
        }
    }

    return (
        <div className={styles.card__wrapper__full} 
            style={{
                flexDirection: flexDirection()
            }}
        >
            { (direction=="left" || direction=="top") ?
                (
                    <>
                        <div className={styles.article__information__wrapper} style={{paddingRight: (direction=="left") ? 5:0 }}>
                            <div className={styles.article__headline__wrapper} style={{textAlign: isCentered ? "center" : ""}}>
                                <a className={styles.article__headline__link} href={`/presents/${article.slug}`}>
                                    {headline}
                                </a>
                            </div>
                            <div className={styles.article__author__wrapper} style={{textAlign: isCentered ? "center" : ""}}>by {authorsList}</div>
                        </div>

                        <a className={styles.article__image__link} href={`/presents/${article.slug}`}>
                            <div className={styles.article__image__wrapper}>
                                <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
                            </div>
                        </a>
                    </>
                ):(
                    <>
                        <a className={styles.article__image__link} href={`/presents/${article.slug}`}>
                            <div className={styles.article__image__wrapper}>
                                <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
                            </div>
                        </a>

                        <div className={styles.article__information__wrapper} style={{paddingLeft: (direction=="right") ? 15:0 }}>
                            <div className={styles.article__headline__wrapper} style={{textAlign: isCentered ? "center" : ""}}>
                                <a className={styles.article__headline__link} href={`/presents/${article.slug}`}>
                                    {headline}
                                </a>
                            </div>
                            <div className={styles.article__author__wrapper} style={{textAlign: isCentered ? "center" : ""}}>by {authorsList}</div>
                        </div>
                    </>
                )
            }
        </div>
    );
}