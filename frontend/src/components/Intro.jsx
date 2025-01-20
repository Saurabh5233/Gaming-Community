/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom' 
import './Intro.css'
import { useNavigate } from 'react-router-dom';
import games from '../assets/games.json'
import gamesCategory from '../assets/gamesCategory.json'

const Intro = () => {
  const token = localStorage.getItem('token');

  const [gameList, setGameList] = React.useState([])
  const [categoryList, setCategoryList] = React.useState([])

  useEffect(()=>{
    setGameList(games)
    setCategoryList(gamesCategory)
  },[])


  const navigate = useNavigate();



  const handleScroll = (path) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };
  

  return (
    <>

    <div className='Intro'>
        <div className="intro-content">
            <p><center>JOIN THE ADVENTURE</center></p>
            <div></div>
            <div></div>
            {token ?<Link to="/community" className='intro-button'>JOIN COMMUNITY</Link>:
            <Link to="/login" className='intro-button'>JOIN COMMUNITY</Link>}
        </div>
      
    </div>
    <div className='intro-bottom'>
      <div className="intro-bottom-content">
        <h1>Explore these Adventures</h1>
        <h2>Discover the ultimate destination for gaming enthusiasts! Dive into a variety of exciting games, challenge yourself in competitive tournaments, and explore insightful articles and tips on our blog. Join the community and level up your gaming experience today!</h2>
        <div>
          <Link to="/games" onClick={handleScroll} className="intro-game"><p>GAMES</p></Link>
          <Link to="/blogs" onClick={handleScroll} className="intro-blog"><p>BLOG</p></Link>
          <Link to="/community" onClick={handleScroll} className="intro-tournament"><p>COMMUNITY</p></Link>
        </div>
      </div>
    </div>
    
    <div className="section-gradient"></div>
    <div className="sample-games">
              <h1>Game Categories</h1>
        <div className='game-list'>

        {categoryList.map((category, index) => (
            <div key={index} className="gameCard">
              <div className="cardImage">
                <img src={category.image_url}  alt={category.category} />
              </div>
              <h3>{category.category}</h3>
            </div>
          ))}
          
        </div>
      <div className="section-gradient-end"></div>
        <div className="categories">
          <h1>Games</h1>
          <div className="category-list">

          {gameList.map((game, index) => (
            <div key={index} className="categoryCard">
              <div className="categoryImage">
                <img src={game.img_url}  alt={game.game_name} className='imagesize'/>
              </div>
              <h3>{game.game_name}</h3>
            </div>
          ))}
            
          </div>
            <div className="section-gradient-end"></div>
        </div>
      </div>    



    </>
  )
}

export default Intro
