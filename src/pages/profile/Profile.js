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
import { getElementError } from "@testing-library/react";
function Profile() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isDataAvailable, setDataAvailable] = useState(false);
  const [user, setUser] = useState("");
  var subscribed = false;

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
        setDataAvailable(true);
      })
      .catch((error) => console.log("error", error));
    renderBanner(user.bannerUrl);
    if (!subscribed) {
    }
  }, [isDataAvailable]);

  function renderBanner(bannerUrl) {
    document
      .getElementById("profile-pic-id-desk")
      .setAttribute("src", bannerUrl);
    document.getElementById("profile-pic-id").setAttribute("src", bannerUrl);
  }

  function subscribe() {
    //TODO: fix for mobile devices
    if (window.innerWidth >= 700) {
      document.getElementById("subscribe-button").classList.add("to-check");
      setTimeout(() => {
        var add = document.getElementById("subscribe-button");
        document.getElementById("profile-bottom").removeChild(add);
        document.getElementById(
          "profile-bottom"
        ).innerHTML += `<svg class="subscribed ___12fm75w_v8ls9a0 f1w7gpdv fez10in fg4l7m0" id="subed" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm2.12 4.16L7.25 9.04l-1.4-1.4a.5.5 0 1 0-.7.71L6.9 10.1c.2.2.5.2.7 0l3.23-3.23a.5.5 0 0 0-.71-.7Z" fill="currentColor"></path></svg>`;
      }, 290);
    } else {
      document
        .getElementById("subscribe-button-mobile")
        .classList.add("to-check");
      setTimeout(() => {
        var add = document.getElementById("subscribe-button-mobile");
        document.getElementById("profile-icon-section").removeChild(add);
        document.getElementById(
          "profile-icon-section"
        ).innerHTML += `<svg class="subscribed ___12fm75w_v8ls9a0 f1w7gpdv fez10in fg4l7m0" id="subed" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm2.12 4.16L7.25 9.04l-1.4-1.4a.5.5 0 1 0-.7.71L6.9 10.1c.2.2.5.2.7 0l3.23-3.23a.5.5 0 0 0-.71-.7Z" fill="currentColor"></path></svg>`;
      }, 290);
    }
  }

  return (
    <>
      <NavbarDesk></NavbarDesk>
      <div className="profile">
        <div className="profile-head-section">
          <div className="profile-icon-section" id="profile-icon-section">
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
              id="subscribe-button-mobile"
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
        <div className="desk-bottom-section" id="profile-bottom">
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
