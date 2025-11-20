import React, { useContext } from 'react';
import { useState } from 'react';
import './CommentForm.css'
import { AccountContext } from '../../../Context/AccountContextProvider';

function CommentForm({ onAddComment }) {
    // State for what user is currently typing
    //const [currentName, setCurrentName] = useState("");
    const [currentComment, setCurrentComment] = useState("");

    //We only get account name cause this shoudnt be shown UNLESS logged in
    const { accountName } = useContext(AccountContext);

    // Function that runs when submit button is clicked
    const handleSubmit = (e) => {
        // Create a new comment object
        const newComment = {
            //name: currentName,
            name: accountName,
            comment: currentComment
        };

        e.preventDefault();
        
        // Call the function that the parent passed to us
        onAddComment(newComment);
        // Clear the input fields for next comment
        //setCurrentName("");
        setCurrentComment("");
    };

    return (
        <div>
            <h2>Leave a Comment</h2>
            
            {/* Name input field */}
            <form onSubmit={handleSubmit} className='comment-form'>
                {/* <input 
                    value={currentName}
                    onChange={(e) => setCurrentName(e.target.value)}
                    placeholder="Your name"
                    required
                /> */}
                
                {/* Comment textarea */}
                <textarea 
                    value={currentComment}
                    onChange={(e) => setCurrentComment(e.target.value)}
                    placeholder="Add a comment"
                    required
                />
                
                {/* Submit button */}
                <input type='submit'/>
            </form>
        </div>
    );
}

export default CommentForm;