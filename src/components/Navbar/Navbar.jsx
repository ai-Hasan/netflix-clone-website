import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_btn from "../../assets/search_btn.svg";
import bell from "../../assets/bell_btn.svg";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import profile_icon from "../../assets/profile_icon.png";

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Detect user state
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Navbar scroll effect
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="nav-left">
        <img
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt="Logo"
        />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="nav-right">
        <img src={search_btn} alt="Search" className="icons" />
        <img src={bell} alt="Notifications" className="icons" />
        {user ? (
          <div
            className="profile-container"
            style={{ position: "relative", cursor: "pointer" }}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onClick={toggleDropdown}
          >
            <img src={profile_icon} alt="Profile" className="profile-pic" />
            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "36px",
                  right: "0",
                  color: "white",
                  borderRadius: "4px",
                  width: "87px",
                  zIndex: 1000,
                }}
              >
                <button
                  onClick={handleLogout}
                  style={{
                    backgroundColor: "#e50914",
                    color: "white",
                    border: "none",
                    fontSize: "14px",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              className="btn1"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </button>
            <button
              className="btn2"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
