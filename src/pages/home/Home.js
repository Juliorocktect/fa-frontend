import React, { useEffect } from "react";
import Video from "../../components/video/Video";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import NavbarDesk from "../../dekstop/navbar/NavbarDesk";
import Trends from "../../components/trends/Trends";
import "../../components/video/Video.css";
import { useState } from "react";

function Home() {
  const [videos, setVideos] = useState([]);
  const [isDataAvailable, setDataAvailable] = useState(false);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "http://192.168.178.95:9090/video/getVideosByLimit?limit=10",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result);
        setDataAvailable(true);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
    if (isDataAvailable) {
    }
  }, [isDataAvailable]);
  //TODO: only load shown content + extra
  //TODO: load new Content if old content isnt shown
  return (
    <>
      <div className="home">
        <NavbarDesk></NavbarDesk>
        <Trends />
        <Slider></Slider>
        <div className="video-container-container">
          <div className="video-container" id="videoContainer">
            {videos.map((video) => (
              <Video
                preview={video.thumbnailUrl}
                profile={video.profilePicture}
                title={video.title}
                description={video.description}
                videoId={video.id}
              />
            ))}
          </div>
        </div>
        <div className="navbar-home">
          <Navbar className="home-nav"></Navbar>
        </div>
      </div>
    </>
  );
}

export default Home;
