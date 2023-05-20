export default function dehtml(string) {
    string = string
        .replace(/<\/?[^>]+(>|$)/g, "")
        .replaceAll("&#8217;", "’") // apostrophe
        .replaceAll("&#39;", "'") // right apostrophe to apostrophe
        .replaceAll("&#8212;", "—") // different dash to em dash
        .replaceAll("&#8211;", "—") // different dash to em dash
        .replaceAll("&#8208;", "-") // normal dash 
        .replaceAll("&#8230;", "...") // ellipsis
        .replaceAll("&hellip;", "...") //elipsis
        .replaceAll("&#8216;", "‘") // left apostrophe
        .replaceAll("&#038;", "&")
        .replaceAll("&#8220;", "“")
        .replaceAll("&#8221;", "”")
        .replaceAll("&nbsp;", " "); // non breaking space
    
    return string;
}