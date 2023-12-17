import React from "react";
import {
  ArrowMaximize16Filled,
  Settings16Regular,
  Speaker216Regular,
  Pause12Filled,
  SkipBack1020Regular,
  SkipForward1020Regular,
  Play12Filled,
  Bookmark20Regular,
  Bookmark20Filled,
  Heart16Regular,
  Heart16Filled,
} from "@fluentui/react-icons";
import { ArrowLeft12Filled, AddCircle12Regular } from "@fluentui/react-icons";
import "./Player.css";
import NavbarDesk from "../../dekstop/navbar/NavbarDesk";
import { getSession } from "../../Cookie";
function Player() {
  let playStatus = false;
  function playVideo() {
    let video = document.getElementById("video-player");
    if (playStatus) {
      video.pause();
      displayPaused();
      playStatus = false;
    } else {
      video.play();
      displayPlay();
      playStatus = true;
    }
  }
  function subscribe() {
    //TODO: fix for mobile devices
    document.getElementById("subscribe-button").classList.add("to-check");
    setTimeout(() => {
      var add = document.getElementById("subscribe-button");
      document.getElementById("player-account-back").removeChild(add);
      document.getElementById(
        "player-account-back"
      ).innerHTML += `<svg class="subscribed ___12fm75w_v8ls9a0 f1w7gpdv fez10in fg4l7m0" id="subed" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm2.12 4.16L7.25 9.04l-1.4-1.4a.5.5 0 1 0-.7.71L6.9 10.1c.2.2.5.2.7 0l3.23-3.23a.5.5 0 0 0-.71-.7Z" fill="currentColor"></path></svg>`;
    }, 290);
  }
  function displayPlay() {
    document.getElementById(
      "pause-play-container"
    ).innerHTML = `<svg class="nav-icon play-icon-disabled ___12fm75w_v8ls9a0 f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 2a1 1 0 0 0-1.5.86v6.28a1 1 0 0 0 1.5.87l5.49-3.14a1 1 0 0 0 0-1.74L4.49 2Z" fill="currentColor"></path></svg>`;
  }
  function displayPaused() {
    document.getElementById(
      "pause-play-container"
    ).innerHTML = `<svg class="nav-icon ___12fm75w_v8ls9a0 f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm5 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8Z" fill="currentColor"></path></svg>`;
  }
  function skipBack() {
    let video = document.getElementById("video-player");
    video.currentTime -= 10;
  }
  function skipForward() {
    let video = document.getElementById("video-player");
    video.currentTime += 10;
  }
  function toggleFullscreen() {
    let video = document.getElementById("video-player");
    video.requestFullscreen();
  }
  //TODO: fix design for IOS
  //TODO: add element for video time
  return (
    <>
      <NavbarDesk></NavbarDesk>
      <div className="player">
        <div className="video-player">
          <div className="player-config">
            <Settings16Regular className="nav-icon player-icon" />
            <Speaker216Regular className="nav-icon player-icon" />
            <div className="fullscreen-container player-icon">
              <ArrowMaximize16Filled
                className="nav-icon "
                onClick={toggleFullscreen}
              />
            </div>
          </div>
          <div className="controls-container" id="controls-container">
            <div className="skip-back-container">
              <SkipBack1020Regular className="nav-icon" onClick={skipBack} />
            </div>
            <div
              className="pause-play-container"
              id="pause-play-container"
              onClick={() => {
                playVideo();
              }}
            >
              <Pause12Filled className="nav-icon" />
            </div>
            <div className="skipForward">
              <SkipForward1020Regular
                className="nav-icon"
                onClick={skipForward}
              />
            </div>
          </div>
          <video id="video-player" autoPlay={false} controls={false}>
            <source src="http://192.168.178.95:80/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="player-account">
          <div className="player-account-front">
            <img
              src="https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg"
              alt=""
              className="player-profile-picure"
              onClick={() => {
                alert(getSession());
              }}
            />
            <h1 className="player-title" id="player-title">
              Title
            </h1>
          </div>
          <div className="player-account-back" id="player-account-back">
            <Heart16Regular className="nav-icon" />
            <Bookmark20Regular className="nav-icon" />
            <AddCircle12Regular
              className="nav-icon"
              id="subscribe-button"
              onClick={() => {
                subscribe();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
