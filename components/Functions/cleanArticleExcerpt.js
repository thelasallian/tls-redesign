export default function cleanArticleExcerpt(excerpt, shortenTo=-1) {
    excerpt = excerpt.replace(/<[^>]+>/g, '')
    let ellipsisIndex = excerpt.indexOf("&hellip;");

    if(shortenTo != -1) {
        let finalWordIndex = getPositionOfString(excerpt, " ", shortenTo);
        return excerpt.substring(0, finalWordIndex)+"... ";
    }

    if(ellipsisIndex == -1) {
        return excerpt.substring(0, excerpt.length-1)+".. ";
    } else {
        return excerpt.substring(0, ellipsisIndex)+"... ";
    } 
}


// Reference: https://stackoverflow.com/questions/14480345/how-to-get-the-nth-occurrence-in-a-string
function getPositionOfString(entry, targetString, index=0) {
  return entry.split(targetString, index).join(targetString).length;
}