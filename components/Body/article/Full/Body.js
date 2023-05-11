import {React, useEffect} from "react";
import styles from "@/styles/Body/article/Full/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import parseRelatedArticles from "@/components/Functions/parseRelatedArticles";
import dehtml from "@/components/Functions/dehtml";
import dayjs from "dayjs";

export default function Body({article, section}) {
    const headline = dehtml(article.title["rendered"]);
    const authorsList = createAuthorsList(article.authors, "link");
    const dateCreated = dayjs(article.date).format("MMMM D, YYYY");
    const relatedArticles = parseRelatedArticles(article["jetpack-related-posts"].slice(0,3));
    const relatedArticlesCard = relatedArticles.map(article => 
        <ArticleCard 
            key={`${article.slug}-articleCard`}
            article={article}
            hasSnippet={false}
            hasAuthor={false}
            hasImage={true}
            hasDate={true}
        />
    )
    

    const setBackgroundColor = () => {
        if (section === "University") return styles.university;
        else if (section === "Menagerie") return styles.menagerie;
        else if (section === "Sports") return styles.sports;
        else if (section === "Vanguard") return styles.vanguard;
        else if (section === "Opinion") return styles.opinion;
        else return null;

    }
    
    return (
        <div className={styles.body__wrapper__full}>
            <div className={`${styles.body__background__wrapper} ${setBackgroundColor()}`}>
                <img className={styles.background__image__img} src={article.jetpack_featured_media_url}/>
            </div>
            
            <div className={styles.body__foreground__wrapper}>
                
                <div className={styles.body__content__wrapper}>

                    <div className={styles.body__information__wrapper}>
                        <div className={styles.body__headline__wrapper}>{headline}</div>
                        <div className={styles.body__author__wrapper}>by {authorsList}</div>
                        <div className={styles.body__date__wrapper}>{dateCreated}</div>
                    </div>

                    <div className={styles.body__text__wrapper} dangerouslySetInnerHTML={{__html: article.content.rendered}}/>

                    <div className={styles.body__suggestions__wrapper}>
                        <div className={styles.suggestions__header__wrapper}>Related posts</div>
                        <div className={styles.suggestions__articles__wrapper}>
                            {relatedArticlesCard}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

{/* <div className={styles.body__foreground__wrapper}>
    <div className={styles.body__information__wrapper}>
        <div className={styles.body__headline__wrapper}>{headline}</div>
        <div className={styles.body__author__wrapper}>by {authorsList}</div>
        <div className={styles.body__date__wrapper}>{dateCreated}</div>
    </div>
    <div 
        className={styles.body__content__wrapper} 
        dangerouslySetInnerHTML={{__html: article.content.rendered}}
    />
    <div className={styles.body__suggestions__wrapper}>
        <div className={styles.suggestions__header__wrapper}>Related posts</div>
        <div className={styles.suggestions__articles__wrapper}>
            {relatedArticlesCard}
        </div>
    </div>
</div> */}