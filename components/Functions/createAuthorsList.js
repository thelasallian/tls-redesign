export default function createAuthorsList(authors, options="none"){
    
    if(options === "link") {
        return createAuthorListWithLink(authors);
    } else {
        return createAuthorListWithNoLink(authors);
    }
}

function createAuthorListWithNoLink(authors) {
    let concatonatedAuthors = [];

    for(let i=0; i<authors.length; i++) {
        if(authors.length > 2) {
            if(i < authors.length - 1) {
                concatonatedAuthors.push(<span key={`${authors[i].display_name}-comma`}>{`${authors[i].display_name}, `}</span>);
            } else {
                concatonatedAuthors.push(<span key={`${authors[i].display_name}-and`}>{`and ${authors[i].display_name}`}</span>);
            }
        } else if(authors.length == 2) {
            if(i == 0) {
                concatonatedAuthors.push(<span key={`${authors[i].display_name}-comma`}>{`${authors[i].display_name}`}</span>);
            } else {
                concatonatedAuthors.push(<span key={`${authors[i].display_name}-comma`}>{` and ${authors[i].display_name}`}</span>);
            }
        } else {
            concatonatedAuthors.push(<span key={`${authors[i].display_name}-comma`}>{authors[i].display_name}</span>);
        }
    }
    return concatonatedAuthors;
}

function createAuthorListWithLink(authors) {
    let concatonatedAuthors = [];

    if (authors === null) return;

    for(let i=0; i<authors.length; i++) {
        if(authors.length > 2) {
            if(i < authors.length - 1) {
                concatonatedAuthors.push(
                    <a 
                        key={`${authors[i].display_name}-link`} 
                        href={`/by/${authors[i].slug}`}
                    >
                        {authors[i].display_name}
                    </a>
                );
                concatonatedAuthors.push(
                    <span 
                        key={`${authors[i].display_name}-comma`}
                    >
                        {", "}
                    </span>
                );
            } else {
                concatonatedAuthors.push(<span key={`${authors[i].display_name}-and`}>{"and "}</span>);
                concatonatedAuthors.push(<a key={`${authors[i].display_name}-link`} href={`/by/${authors[i].slug}`}>{authors[i].display_name}</a>);
            }
        } else if(authors.length == 2) {
            if(i == 0) {
                concatonatedAuthors.push(<a key={`${authors[i].display_name}-link`} href={`/by/${authors[i].slug}`}>{authors[i].display_name}</a>);
            } else {
                concatonatedAuthors.push(<span key={`${authors[i].display_name}-and`}>{" and "}</span>);
                concatonatedAuthors.push(<a key={`${authors[i].display_name}-link`} href={`/by/${authors[i].slug}`}>{authors[i].display_name}</a>);
            }
        } else {
            concatonatedAuthors.push(<a key={`${authors[i].display_name}-link`} href={`/by/${authors[i].slug}`}>{authors[i].display_name}</a>);
        }
    }
    return concatonatedAuthors;
}

