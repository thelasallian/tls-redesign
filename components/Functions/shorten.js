export default function shorten(string, wordLimit=null) {
    if(wordLimit === null) {
        string = string.substring(0, string.length-1)
        return string;
    }

    const wordCount = string.split(" ").length;
    if(wordLimit < wordCount) {
        string = string.split(" ", wordLimit).join(" ");

        if(string[string.length - 1] === "," || string[string.length - 1] === "—" || string[string.length - 1] === ";" || string[string.length - 1] === ".") {
            string = string.substring(0,string.length-1);
        }
    } else {
        string = string.substring(0,string.length-2);
    }

    string = string+"...";
    return string;
}