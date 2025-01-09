import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import '../components/css/Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false); 
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
            <h1><span>Gaming</span>  Community</h1>
                <div className='nav-link'>
                    <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">About</Link></li>
                    <li><Link to="/signup">Contact</Link></li>
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
