import React from "react";
import styles from "@/styles/Body/Index/BodyFull.module.scss";
import BannerArticle from "@/components/ArticleCards/BannerArticle";

export default function BodyFull({sections}) {
    // const bannerArticles = sections.map(section => section.articles[0]);
    // const bannerArticleCards = bannerArticles.map(bannerArticle => <BannerArticle key={bannerArticle.id} article={bannerArticle}/>);

    
    return (
        <div className={styles.body__wrapper__full}>
            <div className={styles.section__banners__full}>
                lorem500
            </div>
            <div className={styles.section__articles__full}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae sunt et eaque rerum amet ullam molestias dolorum voluptatum! Asperiores, soluta incidunt tenetur nam, doloremque distinctio expedita corrupti deleniti non odit mollitia, dicta quisquam accusamus totam! Possimus totam quibusdam in. Commodi modi eaque iusto aliquid nihil atque dignissimos nam quia.
            </div>
            <div className={styles.section__articles__full}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat distinctio tempore assumenda ea corporis vitae ullam modi officia, rerum dicta asperiores voluptates autem ab sit facilis doloribus? Rem impedit provident iusto qui corporis velit, cupiditate autem est amet quibusdam praesentium eos tempore iste veritatis, incidunt animi ut architecto mollitia.
            </div>
            <div className={styles.section__articles__full}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae odio nesciunt porro modi ab placeat excepturi cum incidunt rerum quod sed ducimus accusamus qui atque, reprehenderit ratione suscipit sunt. Perspiciatis sint provident id temporibus suscipit magnam, laboriosam beatae autem ducimus recusandae tenetur tempore, ea dolorem nobis error ipsum molestias!
            </div>
            <div className={styles.section__articles__full}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quos molestiae aperiam nisi laborum aut fugiat dicta natus voluptate eos, quaerat vel atque omnis architecto praesentium quisquam totam necessitatibus fugit corrupti, suscipit recusandae eveniet, ut incidunt possimus? Mollitia quod rerum commodi, porro iste ducimus ad sint quos labore consequuntur veritatis?
            </div>
        </div>
    );
}