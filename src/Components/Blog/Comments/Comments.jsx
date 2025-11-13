import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Comments.css';
import CommentForm from './CommentForm';

function Comments() {
    // Get the post ID from the URL (e.g., /posts/1 -> postId = "1")
    const params = useParams();
    const postId = params.post_id;

    // State to store all comments for this post
    const [comments, setComments] = useState([]);

    // Fetch comments from API when component loads
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [postId]); // Re-fetch if postId changes

    // Handle adding a new comment
    const handleAddComment = (newComment) => {
        // Send POST request to API with new comment data
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                postId: postId,
                name: newComment.name,
                body: newComment.comment,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Add the new comment to our existing list
            setComments([...comments, data]);
        })
        .catch(error => console.error('Error adding comment:', error));
    };

    return (
        <div className='comments-section'>
            {/* Form for submitting new comments */}
            <CommentForm onAddComment={handleAddComment} />
            
            <h3>Existing Comments:</h3>
            
            {/* Show message if no comments, otherwise display the list */}
            {comments.length === 0 ? (
                <p>No comments yet. Be the first to comment!</p>
            ) : (
                <ul className='comments-list'>
                    {/* Loop through and display each comment */}
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <strong>{comment.name}:</strong> {comment.body}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Comments;