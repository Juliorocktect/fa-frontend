import React, { useEffect } from "react";
import Video from "../../components/video/Video";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import NavbarDesk from "../../dekstop/navbar/NavbarDesk";
import SliderTrends from "../../dekstop/sliderTrends/SliderTrends";
import "../../components/video/Video.css";
import { useState } from "react";

function Home() {
  const [videos, setVideos] = useState([]);
  const [isDataAvailable, setDataAvailable] = useState(false);

  // TODO: fix fucking useEffect method
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "http://Localhost:9090/video/getVideosByLimit?limit=4",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result);
        setDataAvailable(true);
      })
      .catch((error) => console.log("error", error));
    if (isDataAvailable) {
      setVideoContent();
    }
  }, [isDataAvailable]);

  function setVideoContent() {
    let videoString = "";
    for (let i = 0; i < videos.length; i++) {
      videoString += `
      <div className="video" id="video">
      <div className="video-top-section" id="video-top-section">
        <img
          src=${videos[i].thumbnailUrl}
          alt="preview"
          srcset=""
          className="preview-img"
          id="preview-img"
        />
      </div>
      <div className="video-description-section" id="video-description-section">
        <div className="profile-section" id="profile-section">
          <img
            src="http://localhost/f6122222-9038-40e5-8016-48f1dbc7d1ec/f6122222-9038-40e5-8016-48f1dbc7d1ec.jpeg"
            className="video-profile-pic"
            id="video-profile-pic"
          />
        </div>
        <div className="data-section" id="data-section">
          <h3 className="video-title" id="video-title" >${videos[i].title}</h3>
          <h6 className="video-description" id="video-description">${videos[i].description}</h6>
        </div>
      </div>
    </div>
      `;
    }
    document.getElementById("videoContainer").innerHTML += videoString;
  }
  return (
    <>
      <div className="home">
        <NavbarDesk></NavbarDesk>
        <SliderTrends />
        <Slider></Slider>
        <div className="video-container-container">
          <div className="video-container" id="videoContainer">
            <div className="video">
              <div className="video-top-section">
                <img
                  src="http://localhost/f6122222-9038-40e5-8016-48f1dbc7d1ec/f6122222-9038-40e5-8016-48f1dbc7d1ec.jpeg"
                  alt="preview"
                  srcset=""
                  className="preview-img"
                />
              </div>
              <div className="video-description-section">
                <div className="profile-section">
                  <img
                    src="http://localhost/f6122222-9038-40e5-8016-48f1dbc7d1ec/f6122222-9038-40e5-8016-48f1dbc7d1ec.jpeg"
                    alt=""
                    className="video-profile-pic"
                  />
                </div>
                <div className="data-section">
                  <h3 className="video-title">asdf</h3>
                  <h6 className="video-description">dsfsf</h6>
                </div>
              </div>
            </div>
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
