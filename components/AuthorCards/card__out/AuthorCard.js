//detailed__full__right
import styles from "@/styles/AuthorCards/card__out/AuthorCard.module.scss";

export default function AuthorCard({
    author
 }) {

    return (
        <div className={styles.card__wrapper__full}>

            <div className={styles.author__image__wrapper}>
                <a className={styles.image__link__wrapper} href={`/by/${author.slug}`}>
                    <div className={styles.image__div__wrapper}>
                        <img className={styles.author__image__img} src={author.avatar_urls["96"]}/>    
                    </div>
                </a>
            </div>

            <div className={styles.author__information__wrapper}>
                <div className={styles.author__name__wrapper}>
                    <a href={`/by/${author.slug}`}>
                        {author.name}
                    </a>
                </div>
                <div className={styles.author__bio__wrapper}>
                    {(author.description != "") ? author.description : "A contributor of The LaSallian. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."}
                </div>
            </div>

        </div>
    );
}