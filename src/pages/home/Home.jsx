import React, { useEffect } from "react";
import Video from "../../components/video/Video";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import NavbarDesk from "../../dekstop/navbar/NavbarDesk";
import "../../components/video/Video.css";
import { useState } from "react";
import TrendsNew from "../../components/trendsNew/TrendsNew";
import image from "./image.jpeg";

function Home() {
  const [videos, setVideos] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "http://192.168.178.95:9090/video/getVideosByLimit?limit=30",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result);
        setLoad(true);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  //TODO: add paging system
  return (
    <>
      <div className="home">
        <NavbarDesk></NavbarDesk>
        <TrendsNew />
        <Slider></Slider>
        <div className="video-container-container">
          <div className="video-container" id="videoContainer">
            {load &&
              videos.map((video) => (
                <Video
                  preview={video.thumbnailUrl}
                  profile={video.profilePicture}
                  title={video.title}
                  description={video.description}
                  videoId={video.id}
                  profileId={video.authorId}
                />
              ))}
                {[...Array(20)].map((elementInArray, index) => ( 
                  <Video
                    preview={image}
                    profile={image}
                    title={"Test Title"}
                    description={"Test Desription"}
                    videoId={"8902342"}
                    profileId={"890981023"}
                  />
                ))
              }
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
