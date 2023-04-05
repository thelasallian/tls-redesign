export default function cleanArticleExcerpt(excerpt) {
    excerpt = excerpt.replace(/<[^>]+>/g, '')
    let ellipsisIndex = excerpt.indexOf("&hellip;");

    return excerpt.substring(0, ellipsisIndex)+"...";
}