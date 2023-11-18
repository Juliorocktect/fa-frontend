import React from "react";
import Video from "../../components/video/Video";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="video-container">
          <Video></Video>
        </div>
      </div>
    </>
  );
}

export default Home;
