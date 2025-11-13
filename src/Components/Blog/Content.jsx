import './Styles/Content.css';

function Content({title, content, author, date}) { 
    //Just makes the post
    return (
        <div className='contentBox'>
            <h2 className='postTitle'>{title}</h2>
            <p className='postContent'>{content}</p>
            <p className='postAuthor'><b>Author:</b> {author}</p>
            <p className='postDate'><b>Date:</b> {date}</p>
        </div>
    );
}


export default Content;