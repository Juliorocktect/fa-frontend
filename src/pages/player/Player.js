import React from "react";
import {
  ArrowMaximize16Filled,
  Settings16Regular,
  Speaker216Regular,
  Pause12Filled,
  SkipBack1020Regular,
  SkipForward1020Regular,
  Play12Filled,
} from "@fluentui/react-icons";
import "./Player.css";

function Player() {
  let playStatus = false;
  function playVideo() {
    let video = document.getElementById("video-player");
    if (playStatus) {
      video.pause();
      playStatus = false;
    } else {
      video.play();
      playStatus = true;
    }
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
  return (
    <>
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
        <div className="controls-container">
          <div className="skip-back-container">
            <SkipBack1020Regular className="nav-icon" onClick={skipBack} />
          </div>
          <div className="pause-play-container">
            <Pause12Filled className="nav-icon" onClick={playVideo} />
            <Play12Filled
              className="nav-icon play-icon-disabled"
              onClick={playVideo}
            />
          </div>
          <div className="skipForward">
            <SkipForward1020Regular
              className="nav-icon"
              onClick={skipForward}
            />
          </div>
        </div>

        <video id="video-player">
          <source src="http://192.168.178.95:80/video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Player;
