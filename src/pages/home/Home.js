import React, { useEffect } from "react";
import Video from "../../components/video/Video";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import NavbarDesk from "../../dekstop/navbar/NavbarDesk";
import SliderTrends from "../../dekstop/sliderTrends/SliderTrends";
import { useState } from "react";

function Home() {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:9090/video/getVideosByLimit?limit=2")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideos(result);
      })
      .catch((error) => console.log("error", error));
    let videoString = "";
    /*
    videos.forEach((video) => {
      videoString += `
      <Video
      preview={
        ${video.VideoUrl}
      }
      profile={${video.profileUrl}
      }
      ></Video>
      `;
    });
    console.log(videoString);
    */
  }, []);

  return (
    <>
      <div className="home">
        <NavbarDesk></NavbarDesk>
        <SliderTrends />
        <Slider></Slider>
        <div className="video-container-container">
          <div className="video-container">
            <Video
              preview={
                "http://localhost/4ffeeb10-f0d5-41f2-b18a-7cc6142ee61e/federico-bottos-JUFuI-kBtas-unsplash.jpg"
              }
              profile={
                "http://localhost/d0bd40ff-ff8c-473a-ba2e-76372c4f7a55/Screensaver.png"
              }
            ></Video>
            <Video
              preview={
                "http://localhost/4ffeeb10-f0d5-41f2-b18a-7cc6142ee61e/federico-bottos-JUFuI-kBtas-unsplash.jpg"
              }
              profile={
                "http://localhost/4ffeeb10-f0d5-41f2-b18a-7cc6142ee61e/federico-bottos-JUFuI-kBtas-unsplash.jpg"
              }
            ></Video>
            <Video
              preview={
                "http://localhost/d0bd40ff-ff8c-473a-ba2e-76372c4f7a55/Screensaver.png"
              }
              profile={
                "http://localhost/4ffeeb10-f0d5-41f2-b18a-7cc6142ee61e/federico-bottos-JUFuI-kBtas-unsplash.jpg"
              }
            ></Video>
            <Video
              preview={
                "http://localhost/d0bd40ff-ff8c-473a-ba2e-76372c4f7a55/Screensaver.png"
              }
              profile={
                "http://localhost/4ffeeb10-f0d5-41f2-b18a-7cc6142ee61e/federico-bottos-JUFuI-kBtas-unsplash.jpg"
              }
            ></Video>
            <Video
              preview={
                "http://localhost/4ffeeb10-f0d5-41f2-b18a-7cc6142ee61e/federico-bottos-JUFuI-kBtas-unsplash.jpg"
              }
              profile={
                "http://localhost/4ffeeb10-f0d5-41f2-b18a-7cc6142ee61e/federico-bottos-JUFuI-kBtas-unsplash.jpg"
              }
            ></Video>
            <Video
              preview={
                "http://localhost/4ffeeb10-f0d5-41f2-b18a-7cc6142ee61e/federico-bottos-JUFuI-kBtas-unsplash.jpg"
              }
              profile={
                "http://localhost/d0bd40ff-ff8c-473a-ba2e-76372c4f7a55/Screensaver.png"
              }
            ></Video>
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
