import React from 'react' 
import './Homepage.css'
import { Link } from 'react-router';

function Homepage() {
  return (
    <main className='Homepage'>
      <h1 className='Home'>Welcome to our Blog</h1>
      <p className= 'Home-subtitle'>Discover articles and share your thoughts in the comments section!</p>
      
      <p className = 'Login-subtitle'>Click here to log in:</p>
      <p className='Links'><Link to="/login"> Log In </Link></p>
      
      <p className = 'Blog-subtitle'>Click here to read our blog posts:</p> 
      <p className='Links'><Link to="/posts"> Blog Posts </Link></p>
      
      
    </main>

  )
}

export default Homepage