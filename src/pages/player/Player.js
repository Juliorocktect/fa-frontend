import React from "react";
import {
  ArrowMaximize16Filled,
  Settings16Regular,
  Speaker216Regular,
  Pause12Filled,
  SkipBack1020Regular,
  SkipForward1020Regular,
} from "@fluentui/react-icons";
function Player() {
  let playStatus = false;
  function playVideo() {
    let video = document.getElementById("video");
    if (playStatus) {
      video.pause();
      playStatus = false;
    } else {
      video.play();
      playStatus = true;
    }
  }
  function skipBack() {
    let video = document.getElementById("video");
    video.currentTime -= 10;
  }
  function skipForward() {
    let video = document.getElementById("video");
    video.currentTime += 10;
  }
  function toggleFullscreen() {
    let video = document.getElementById("video");
    video.requestFullscreen();
  }
  return (
    <>
      <div className="video-player">
        <div className="fullscreen-container">
          <ArrowMaximize16Filled
            className="nav-icon"
            onClick={toggleFullscreen}
          />
        </div>
        <Settings16Regular className="nav-icon" />
        <Speaker216Regular className="nav-icon" />
        <div className="controls-container">
          <div className="skip-back-container">
            <SkipBack1020Regular className="nav-icon" onClick={skipBack} />
          </div>
          <div className="pause-play-container">
            <Pause12Filled className="nav-icon" onClick={playVideo} />
          </div>
          <div className="skipForward">
            <SkipForward1020Regular
              className="nav-icon"
              onClick={skipForward}
            />
          </div>
        </div>

        <video width="100%" height="300" id="video">
          <source src="http://192.168.178.95:80/video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Player;
