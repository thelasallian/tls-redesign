import styles from "@/styles/Body/author/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";
import { useEffect, useState } from "react";

export default function Body({author, articles}) {
    const [isMobile, setIsMobile] = useState(false);

    const handlingWindowResize = () => {
        setIsMobile(window.innerWidth < 750);
    }
    
    useEffect(() => {
        setIsMobile(window.innerWidth < 750);
        window.addEventListener("resize", handlingWindowResize);
    },[]);

    const articleCards = articles.map(article => 
        <div className={styles.article__card__wrapper}>
            <ArticleCard 
                article={article}
                hasSnippet={!isMobile}
                textLocation={"right"}
                isBanner={false}
                cardSize={"medium"}
                hasDate={true}
                isMobile={isMobile}
            />
        </div>
    );


    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.author__information__wrapper}>

                <div className={styles.author__image__wrapper}>
                    <img className={styles.author__image__img} src={author.avatar_urls["96"]}/> 
                </div>
                <div className={styles.author__details__wrapper}>
                    <div className={styles.author__name__wrapper}>
                        {author.name}
                    </div>
                    <div className={styles.author__bio__wrapper}>
                        {(author.description != "") ? author.description : "A contributor of The LaSallian."}
                    </div>
                </div>
            </div>

            <div className={styles.author__articles__wrapper}>
                {articleCards}
            </div>

            <div className={styles.author__button__wrapper}>
                <div className={styles.author__button__item}>
                    Show More
                </div>
            </div>
            
        </div>
    );
}