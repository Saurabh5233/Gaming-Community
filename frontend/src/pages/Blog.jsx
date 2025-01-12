import React from 'react'
import './pages.css'

const Blog = () => {
  return (
    <>
    <div className='page-heading'>
      <h1>BLOGS</h1>
      <div className="page-container">
        {/* When logged in the data will be fecthed and added here. */}
        <p>Please Login to see blogs.</p>
      </div>
    </div>
    </>
  )
}

export default Blog
