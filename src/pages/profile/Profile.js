import React from "react";
import "./Profile.css";
import { ArrowLeft12Filled, AddCircle12Regular } from "@fluentui/react-icons";
import Video from "../../components/video/Video";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import NavbarDesk from "../../dekstop/navbar/NavbarDesk";
function Profile() {
  const navigate = useNavigate();

  function subscribe() {
    console.log("sub");
  }

  return (
    <>
      <NavbarDesk></NavbarDesk>
      <div className="profile">
        <div className="profile-head-section">
          <div className="profile-icon-section">
            <ArrowLeft12Filled
              className="nav-icon"
              onClick={() => {
                navigate("/");
              }}
            />
            <AddCircle12Regular
              className="nav-icon"
              onClick={() => {
                subscribe();
              }}
            />
          </div>
          <div className="profile-name">
            <div className="profile-title-img">
              <img
                src="https://www.pixground.com/wp-content/uploads/2023/03/Windows-11-Landscape-Scenery-Wallpaper-4K-Wallpaper-1024x576.webp"
                alt=""
                className="profile-pic"
              />
            </div>
            <div className="profile-title">
              <h3 className="profile-title-h3">Julio</h3>
              <h6 className="profile-title-h6">125K Abonnenten</h6>
            </div>
          </div>
        </div>
        <div className="profile-banner">
          <img
            src="https://www.pixground.com/wp-content/uploads/2023/03/Windows-11-Landscape-Scenery-Wallpaper-4K-Wallpaper-1024x576.webp"
            alt=""
            className="profile-banner-img"
          />
        </div>
        <div className="desk-bottom-section">
          <div className="profile-name">
            <div className="profile-title-img">
              <img
                src="https://www.pixground.com/wp-content/uploads/2023/03/Windows-11-Landscape-Scenery-Wallpaper-4K-Wallpaper-1024x576.webp"
                alt=""
                className="profile-pic"
              />
            </div>
            <div className="profile-title">
              <h3 className="profile-title-h3">Julio</h3>
              <h6 className="profile-title-h6">125K Abonnenten</h6>
            </div>
          </div>
          <AddCircle12Regular
            className="nav-icon"
            onClick={() => {
              subscribe();
            }}
          />
        </div>
        <div className="video-container-profile">
          <div className="profile-video-section">
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
      </div>
      <Navbar></Navbar>
    </>
  );
}

export default Profile;
