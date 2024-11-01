import React from "react";
import "./Footer.css";
import fb from "../../assets/fb_icon.png";
import insta from "../../assets/insta_icon.png";
import x from "../../assets/x_icon.png";
import yt from "../../assets/yt_icon.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="media-icons">
        <img src={fb} alt="" />
        <img src={insta} alt="" />
        <img src={x} alt="" />
        <img src={yt} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Relations</li>
        <li>Legal Notices</li>
        <li>Help Center</li>
        <li>Careers</li>
        <li>Cookies Preferences</li>
        <li>Gift Cards</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
        <li>Media Center</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text"> &copy; 1997-2024 Netflix Inc.</p>
    </div>
  );
};

export default Footer;
