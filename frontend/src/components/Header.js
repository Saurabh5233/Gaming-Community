import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/css/Header.css'; // Ensure CSS is properly linked

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        if (user) {
            setLoggedInUser(user);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="header">
            <nav className='nav'>
            <h1>Gaming Community</h1>
                <div className='nav-link'>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="user-info">
                    <h2 onClick={toggleDropdown} className="profile-toggle">
                        Welcome, {loggedInUser}
                    </h2>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <button onClick={() => navigate('/profile')} className="dropdown-item">
                                View Profile
                            </button>
                            <button onClick={handleLogout} className="dropdown-item">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
