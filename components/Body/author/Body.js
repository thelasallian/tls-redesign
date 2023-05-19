import styles from "@/styles/Body/author/Body.module.scss";
import ArticleCard from "@/components/ArticleCards/card__out/ArticleCard";

export default function Body({author, articles}) {
    const articleCards = articles.map(article => 
        <div className={styles.article__card__wrapper}>
            <ArticleCard 
                article={article}
                textLocation={"right"}
                isBanner={false}
                cardSize={"medium"}
                hasDate={true}
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
                        {author.description}
                    </div>
                </div>
            </div>

            <div className={styles.author__articles__wrapper}>
                {articleCards}
            </div>
            
        </div>
    );
}