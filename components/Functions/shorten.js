export default function shorten(string, wordLimit=null) {
    const sentences = string.split(".");
    const wordCount = sentences[0].split(" ").length;

    if(wordCount <= 4) return string;
    else return sentences[0]+".";
}