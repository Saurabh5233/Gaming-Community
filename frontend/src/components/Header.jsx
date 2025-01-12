/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    // navigate("/home"); // Redirect to home page after logout
  };

  const handleLogin = (user) => {
    localStorage.setItem("loggedInUser", user);
    setLoggedInUser(user);
    navigate("/dashboard"); // Redirect to Dashboard after login
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); 
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownOpen && !e.target.closest(".dropdown-menu")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [dropdownOpen]);
  const getInitials = (name) => {
    const nameArray = name.split(" ");
    const initials = nameArray
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
    return initials;
  };

  return (
    <header>
      <div className="headerContent">
        <Link to="/" className="logoSpace">
          <strong id="logoName">Gaming Community</strong>
        </Link>
        <div className="navLinks">
          {!loggedInUser ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/login" id="login_name">Login</Link>
              <Link to="/signup" id="join_name">
                Register
              </Link>

            </>
          ) : (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/games">Games</Link>
              <Link to="/blogs">Blog</Link>
              <Link to="/tournaments">Tournaments</Link>
            </>
          )}
        </div>
      </div>

      {loggedInUser && (
        <nav className="nav">
          <div className="user-info">
            {/* Profile Icon with Initials */}
            <div className="profile-toggle" onClick={toggleDropdown}>
              <div className="profile-icon">
                {getInitials(loggedInUser)} {/* Show initials */}
              </div>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="dropdown-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => navigate("/profile")}
                  className="dropdown-item"
                >
                  View Profile
                </button>
                <Link onClick={handleLogout} className="dropdown-item">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
