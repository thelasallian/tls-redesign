export default function shorten(string, wordLimit=null) {
    const sentences = string.split(".");
    const wordCount = sentences[0].split(" ").length;

    if(wordCount <= 15) return sentences[0]+". "+sentences[1]+".";
    else return sentences[0]+". ";
}