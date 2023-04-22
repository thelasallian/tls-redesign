//detailed__full__right
import styles from "@/styles/ArticleCards/card__out__small/ArticleCard.module.scss";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import dehtml from "@/components/Functions/dehtml";
import shorten from "@/components/Functions/shorten";

export default function ArticleCard({article, isCentered=false, direction="bottom", hasHeadline=true, hasSnippet=true, hasAuthor=true, hasImage=true, isBanner=false}) {
    const headline = dehtml(article.title["rendered"]);
    const authorsList = createAuthorsList(article.authors, "link");
    const snippet = shorten(dehtml(article.excerpt["rendered"]), 30);

    const flexDirection = (direction === "right" || direction === "left") ? "row":"column";

    const imageWrapper = (hasImage) ? 
    (
        <a className={styles.article__image__link} href={`/presents/${article.slug}`}>
            <div className={`${styles.article__image__wrapper} ${(isBanner ? styles.is__banner : "")}`}>
                <img className={styles.article__image__img} src={article.jetpack_featured_media_url}/>
            </div>
        </a>
    ) :
    (
        null
    );

    const headlineWrapper = (hasHeadline) ? 
    (
        <div className={styles.article__headline__wrapper} style={{textAlign: isCentered ? "center" : ""}}>
            <a className={styles.article__headline__link} href={`/presents/${article.slug}`}>
                {headline}
            </a>
        </div>
    ) : 
    (
        null
    );

    const authorWrapper = (hasAuthor) ? 
    (
        <div className={styles.article__author__wrapper} style={{textAlign: isCentered ? "center" : ""}}>
            by {authorsList}
        </div>
    ) : 
    (
        null
    );

    const snippetWrapper = (hasSnippet) ? 
    (
        <div className={styles.article__snippet__wrapper} style={{textAlign: isCentered ? "center" : "", paddingTop: (hasAuthor) ? "" : 0}}>
            {snippet}<a href={`/presents/${article.slug}`}>Read More</a>
        </div>
    ) : 
    (
        null
    );

    return (
        <div className={styles.card__wrapper__full} 
            style={{
                flexDirection: flexDirection
            }}
        >
            { (direction=="left" || direction=="top") ?
                (
                    <>
                        <div className={styles.article__information__wrapper} style={{paddingRight: (direction=="left") ? 15:0 }}>
                            {headlineWrapper}
                            {authorWrapper}
                            {snippetWrapper}
                        </div>

                        {imageWrapper}
                    </>
                ):(
                    <>
                        {imageWrapper}

                        <div className={styles.article__information__wrapper} style={{paddingLeft: (direction=="right") ? (hasImage ? 15:0) :0 }}>
                            {headlineWrapper}
                            {authorWrapper}
                            {snippetWrapper}
                        </div>
                    </>
                )
            }
        </div>
    );
}