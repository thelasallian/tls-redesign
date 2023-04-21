import React from "react";
import createAuthorsList from "../../Functions/createAuthorsList";
import cleanArticleExcerpt from "../../Functions/cleanArticleExcerpt";
import styles from "@/styles/ArticleCards/Style1/PrimaryArticleMobile.module.scss";

import dehtml from "@/components/Functions/dehtml";
import shorten from "@/components/Functions/shorten";

export default function PrimaryArticleMobile({article}) {
    const headline = dehtml(article.title["rendered"]);
    const authors = createAuthorsList(article.authors);
    const excerpt = shorten(dehtml(article.excerpt["rendered"]), 20);

    return (
        <a className={styles.article__link__wrapper} href={`/presents/${article.slug}`}>
            hello mobile
        </a>
    );
}