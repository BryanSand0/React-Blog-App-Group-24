import { useParams } from "react-router";
import Comments from "./Comments/Comments.jsx";
import Content from "./Content.jsx";
import './Styles/BlogPost.css';
import { useEffect, useState } from "react";
import axios from "axios";

function BlogPost({title, content, author, date}) { 
    const params = useParams();

    //loading constant 
    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();

    //Show what is rendered inside post data
    console.log(postData, authorData);

    useEffect(()=> { 

        const fetchData = async () => {
            try { 
                const postRes = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts/' + params.post_id
                );
                setPostData(postRes.data);

                const authorRes = await axios.get(
                    'https://jsonplaceholder.typicode.com/users/' + postRes.data.userId
                );
                setAuthorData(authorRes.data);
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

    //This just uses the paramters and uses comments component
    const postContent = { 
        date: '2025-10-25',
    };

    return (
        <div class='postContainer'>
            {loading ? //If loading show text for loading instead of content.
            (<p>Loading</p>) : (<>
                <Content
                    title={postData.title}
                    content={postData.body} 
                    author={authorData.name}
                    date={postContent.date} 
                />
                <Comments />
            </>)}
        </div>
    );
}


export default BlogPost;