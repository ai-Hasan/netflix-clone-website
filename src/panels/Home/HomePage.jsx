import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../assets/hero_banner.jpg";
import Hero_title from "../../assets/hero_title.png";
import Play from "../../assets/player_icon.png";
import Info from "../../assets/info_icon.png";
import Card from "../../components/CardTitle/Card";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="hero-section">
        <img src={Banner} alt="" className="banner_img" />
        <div className="hero-caption">
          <img src={Hero_title} alt="" className="caption-img" />
          <p>
            Uncovering his connection to a hidden ancient order, a young man in
            modern-day Istanbul embarks on a perilous quest to protect the city
            from an immortal foe threatening its very existence
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={Play} alt="" /> Play
            </button>
            <button className="btn info-btn">
              <img src={Info} alt="" /> More Info!
            </button>
          </div>
          <Card />
        </div>
      </div>
      <div className="more-cards">
        <Card title={"Blockbuster Movies"} category={"top_rated"} />
        <Card title={"Only on Netflix"} category={"popular"} />
        <Card title={"Upcoming"} category={"upcoming"} />
        <Card title={"Top Pick for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
