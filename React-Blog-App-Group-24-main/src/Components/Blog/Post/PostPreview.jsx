import React from 'react'
import { Link, useParams } from 'react-router'
import './PostPreview.css'

function PostPreview({id, title, content}) {
    const params = useParams();
    const charLimit = 100;
    //ensure content preview doesnt go above char limit 
    if (content.length > charLimit) { 
        //Slice and add '...' to convey there is more to read
        content = content.slice(0, charLimit) + '...';
    } 

    return (
        <div className = 'postCard'>
            <h2 className = 'previewTitle'>{title}</h2>
            <p className = 'previewContent'>{content}</p>
            <Link className='postLink' to={"/posts/" + id}> 
                read more 
            </Link> 
        </div>
    )
}

export default PostPreview