// src/pages/Home.js
import { ToastContainer } from 'react-toastify';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <header className="home-header">
                <h1>Welcome to the Gaming Community</h1>
                <p>Join us to discuss and share everything about gaming!</p>
            </header>
            <section className="recent-posts">
                <h2>Recent Posts</h2>
                <ul>
                    <li>Post 1</li>
                    <li>Post 2</li>
                    <li>Post 3</li>
                </ul>
            </section>
            <section className="featured-games">
                <h2>Featured Games</h2>
                <div className="games-list">
                    <div className="game-item">
                        <h3>Game 1</h3>
                        <p>Description of Game 1</p>
                    </div>
                    <div className="game-item">
                        <h3>Game 2</h3>
                        <p>Description of Game 2</p>
                    </div>
                    <div className="game-item">
                        <h3>Game 3</h3>
                        <p>Description of Game 3</p>
                    </div>
                </div>
            </section>
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default Home;