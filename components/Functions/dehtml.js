export default function dehtml(string) {
    string = string.replace(/<\/?[^>]+(>|$)/g, "");
    string = string.replaceAll("&#8217;", "'"); // '
    string = string.replaceAll("&#39;", "'"); // ' (right side)
    string = string.replaceAll("&#8212;", "—"); // em dash
    string = string.replaceAll("&#8208;", "-"); // dash
    string = string.replaceAll("&#8230;", "..."); //elipsis
    
    return string;
}