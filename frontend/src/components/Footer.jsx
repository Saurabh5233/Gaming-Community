import React from 'react';
import '../components/css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h5>About Us</h5>
                    <p>
                        Gaming Community is a hub for gamers to connect, share, and grow together. 
                        Join us to explore the latest trends, events, and discussions in the gaming world.
                    </p>
                </div>
                <div className="footer-section contact">
                    <h5>Contact</h5>
                    <p>Email: support@gamingcommunity.com</p>
                    <p>Phone: +1-234-567-890</p>
                    <p>Address: 123 Gaming St., Virtual City, GC 56789</p>
                </div>
                <div className="footer-section social">
                    <h5>Follow Us</h5>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                    </div>
                </div>
            </div>
            <p>&copy; 2025 Gaming Community. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
