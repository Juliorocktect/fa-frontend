import React, { useState } from "react";
import "./Profile.css";
import {
  ArrowLeft12Filled,
  AddCircle12Regular,
  CheckmarkCircle16Filled,
} from "@fluentui/react-icons";
import Video from "../../components/video/Video";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import NavbarDesk from "../../dekstop/navbar/NavbarDesk";
import { useEffect } from "react";
function Profile() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isDataAvailable, setDataAvailable] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "http://localhost:9090/user/getUser?userId=" + searchParams.get("id"),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
        console.log(user);
        setDataAvailable(true);
      })
      .catch((error) => console.log("error", error));
    renderBanner(user.bannerUrl);
  }, [isDataAvailable]);

  function renderBanner(bannerUrl) {
    document
      .getElementById("profile-pic-id-desk")
      .setAttribute("src", bannerUrl);
    document.getElementById("profile-pic-id").setAttribute("src", bannerUrl);
  }

  function subscribe() {
    console.log("sub");
    console.log(searchParams.get("id"));
    document.getElementById("subscribe-button").classList.add("to-check");
    document.getElementById("subscribe-button").classList.add("sub-disabled");
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
              <img src="" alt="" id="profile-pic-id" />
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
                src=""
                alt=""
                className="profile-pic"
                id="profile-pic-id-desk"
              />
            </div>
            <div className="profile-title">
              <h3 className="profile-title-h3">Julio</h3>
              <h6 className="profile-title-h6">125K Abonnenten</h6>
            </div>
          </div>
          <AddCircle12Regular
            className="nav-icon"
            id="subscribe-button"
            onClick={() => {
              subscribe();
            }}
          />
          <CheckmarkCircle16Filled className="subscribed" />
        </div>
        <div className="video-container-profile">
          <div className="profile-video-section"></div>
        </div>
      </div>
      <Navbar></Navbar>
    </>
  );
}

export default Profile;
