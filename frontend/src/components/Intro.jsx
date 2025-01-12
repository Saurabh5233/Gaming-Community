/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom' 
import './Intro.css'

const Intro = () => {

  const handleScroll =()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  return (
    <>

    <div className='Intro'>
        <div className="intro-content">
            <p><center>JOIN THE ADVENTURE</center></p>
            <div></div>
            <div></div>
            <Link to="/login" className='intro-button'>JOIN COMMUNITY</Link>
           
        </div>
      
    </div>
    <div className='intro-bottom'>
      <div className="intro-bottom-content">
        <h1>Login to explore these Adventures</h1>
        <h2>Discover the ultimate destination for gaming enthusiasts! Dive into a variety of exciting games, challenge yourself in competitive tournaments, and explore insightful articles and tips on our blog. Join the community and level up your gaming experience today!</h2>
        <div>
          <Link to="/games" onClick={handleScroll} className="intro-game"><p>GAMES</p></Link>
          <Link to="/blogs" onClick={handleScroll} className="intro-blog"><p>BLOG</p></Link>
          <Link to="/tournaments" onClick={handleScroll} className="intro-tournament"><p>TOURNAMENTS</p></Link>
        </div>
      </div>

    </div>

    </>
  )
}

export default Intro
