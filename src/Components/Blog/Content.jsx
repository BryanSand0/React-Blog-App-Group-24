import './Styles/Content.css';

function Content({title, content, author, date}) { 
    //Just makes the post
    return (
        <div class='contentBox'>
            <h2 class='postTitle'>{title}</h2>
            <p class='postContent'>{content}</p>
            <p class='postAuthor'><b>Author:</b> {author}</p>
            <p class='postDate'><b>Date:</b> {date}</p>
        </div>
    );
}


export default Content;