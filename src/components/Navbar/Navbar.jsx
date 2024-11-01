import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_btn from "../../assets/search_btn.svg";
import bell from "../../assets/bell_btn.svg";
import profile_icon from "../../assets/profile_icon.png";
import toggle_icon from "../../assets/toggle_icon.svg";
import manage_profile_icon from "../../assets/manage_profile_icon.svg";
import help from "../../assets/help_icon.svg";
import account_icon from "../../assets/account_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="nav-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular </li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="nav-right">
        <img src={search_btn} alt="" className="icons" />
        <img src={bell} alt="" className="icons" />
        <div className="nav-profile">
          <img src={profile_icon} alt="" className="profile" />
          <img src={toggle_icon} alt="" className="profile" />
          <div className="dropdown-menu">
            <ul>
              <li>
                <img src={manage_profile_icon} alt="" className="icon-menu" />
                Manage Profiles
              </li>
              <li>
                <img src={account_icon} alt="" className="icon-menu" />
                Account
              </li>
              <li>
                <img src={help} alt="" className="icon-menu" />
                Help Center
              </li>
              <hr />
              <li
                onClick={() => {
                  logout();
                }}
              >
                Sign Out of Netflix
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
