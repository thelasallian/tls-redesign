import React from "react";
import styles from '@/styles/BannerArticleCard.module.scss';

export default function BannerArticle({article}) {
    const title = article.title["rendered"].replace(/<\/?[^>]+(>|$)/g, ""); // Solution by https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
    
    return (
        <div className={styles.article__wrapper__full}>
            <a href={`/${title}`} className={styles.article__link__wrapper}>
                <img className={styles.article__image__full} src={article.jetpack_featured_media_url}/>
                <div>
                    <div>words</div>
                </div>
            </a>
        </div>
    );
}