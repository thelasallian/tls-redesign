export default function parseRelatedArticles(relatedArticles) {

    const parsedArticles = relatedArticles.map(article => {
        const indexAdder = 16;
        const startOfSlugIndex = article.url.indexOf(".com/") + indexAdder;


        const slug = article.url.substring(startOfSlugIndex, article.url.length - 1);
        const excerpt = article.excerpt;
        const title = article.title;
        const jetpack_featured_media_url = article.img["src"];

        return {
            title: {
                ["rendered"]: title,
            },
            authors: null,
            excerpt: {
                ["rendered"]: excerpt,
            },
            slug: slug,
            jetpack_featured_media_url: jetpack_featured_media_url,

        };
    });

    return parsedArticles;
}