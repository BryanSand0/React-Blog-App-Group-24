import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import '../../../App.css'
import './PostList.css'
import axios from 'axios';
import PostPreview from './PostPreview';

function PostList() {
  
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState();

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => setPosts(response.data))
    //   .catch(error => console.error('Error fetching posts:', error)); 
    
    const fetchData = async () => {
      try { 
        const postRes = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        setPostData(postRes.data);
        console.log(postData);
      }
      catch (e) { 
        console.log(e);
      }
      finally { 
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(postData);

  return (
    <div className='post-list-container'>
      {loading ? //If loading show text for loading instead of content.
      (<p>Loading</p>) : (
      <>
        <div className='postList'>
          {postData.map((post, index) => (
            <div className='postListing' key={index}>
              <PostPreview 
                id = {post.id}
                title = {post.title}
                content = {post.body}
              />
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default PostList