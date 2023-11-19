import React from "react";
import Video from "../../components/video/Video";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";

function Home() {
  return (
    <>
      <div className="home">
        <Slider></Slider>
        <div className="video-container">
          <Video></Video>
          <Video></Video>
          <Video></Video>
          <Video></Video>
        </div>
        <div className="navbar-home">
          <Navbar className="home-nav"></Navbar>
        </div>
      </div>
    </>
  );
}

export default Home;
