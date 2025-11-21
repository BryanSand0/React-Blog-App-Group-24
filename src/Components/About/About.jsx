import React from 'react'
import './About.css'  

function About() {
  return (
    <main className='About'>
      <h1>Hello, welcome to Group 24s blog!</h1>
      <h2>Group members:</h2>
      <div className="group-members-container">
          <ul>
              <li>Bryan Sandoval</li>
              <li>Connie Griffin</li>
          </ul>
      </div>
    </main>
  )
}

export default About