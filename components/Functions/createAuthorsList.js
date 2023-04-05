export default function createAuthorsList(authors){
    let concatonatedAuthors = [];
    for(let i=0; i<authors.length; i++) {
        if(authors.length > 2) {
            if(i == 0) {
                concatonatedAuthors.push(<a key={authors[i].display_name} href={`/by/${authors[i].slug}`}>{authors[i].display_name}</a>);
                concatonatedAuthors.push(<span>{", "}</span>);
            } else {
                concatonatedAuthors.push(<span>{"and "}</span>);
                concatonatedAuthors.push(<a key={authors[i].display_name} href={`/by/${authors[i].slug}`}>{authors[i].display_name}</a>);
            }
        } else if(authors.length == 2) {
            if(i == 0) {
                concatonatedAuthors.push(<a key={authors[i].display_name} href={`/by/${authors[i].slug}`}>{authors[i].display_name}</a>);
            } else {
                concatonatedAuthors.push(<span>{" and "}</span>);
                concatonatedAuthors.push(<a key={authors[i].display_name} href={`/by/${authors[i].slug}`}>{authors[i].display_name}</a>);
            }
        } else {
            concatonatedAuthors.push(<a key={authors[i].display_name} href={`/by/${authors[i].slug}`}>{authors[i].display_name}</a>);
        }
    }
    return (concatonatedAuthors);
}