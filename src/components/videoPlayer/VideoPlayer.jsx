import React from 'react'
import { useState } from 'react';
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
  import { getSession } from "../../Cookie";

function VideoPlayer({videoUrl,videoId}) {
    const [playStatus,setPlayStatus] = useState(false);
    var seconds = 0;
    var tens = 0;
    var Interval;

    function startTimerFn() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
      }
    
      function stop() {
        clearInterval(Interval);
      }
    
      function startTimer() {
        tens++;
        if (tens > 99) {
          seconds++;
          tens = 0;
          console.log(seconds);
        }
        if (seconds > 30 && !watched) {
          watch();
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
        if (!navigator.userAgent.indexOf("Safari")) {
          document.getElementById("video-player").classList += "";
        } else {
          video.requestFullscreen();
        }
      }
      function updateProgressBar(width) {
        document.getElementById("progress-bar").style.width = width + "%";
      }
      function playVideo() {
        let video = document.getElementById("video-player");
        if (playStatus) {
          video.pause();
          stop();
          setPlayStatus(false);
        } else {
          video.play();
          startTimerFn();
          setPlayStatus(true);
        }
      }
      function updateProgressOnClick(clientX) {
        var progressBar = document.getElementById("progress");
        var rect = progressBar.getBoundingClientRect();
        updateProgressBar(((clientX - rect.left) / rect.width) * 100);
        let video = document.getElementById("video-player");
        video.currentTime = (video.duration * (clientX - rect.left)) / rect.width;
        video.play();
        setPlayStatus(true);
      }
      function watch() {
        var requestOptions = {
          method: "POST",
          redirect: "manual",
        };
    
        fetch(
          "http://192.168.178.95:9090/user/watch?session=" +
            getSession() +
            "&videoId=" +
            videoId,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => null)
          .catch((error) => console.log("error", error));
      }
  return (
    <>
        <div className="video-player ">
          <div className="player-config">
            <Settings16Regular className="nav-icon player-icon" />
            <Speaker216Regular className="nav-icon player-icon" />
            <div className="fullscreen-container player-icon">
              <ArrowMaximize16Filled
                className="nav-icon  player-icon"
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
            >{playStatus && <Play12Filled className="nav-icon"/>}
              {!playStatus && <Pause12Filled className="nav-icon" />}
            </div>
            <div className="skipForward">
              <SkipForward1020Regular
                className="nav-icon"
                onClick={skipForward}
              />
            </div>
          </div>
          <div
            id="progress"
            className="progress"
            onClick={(e) => {
              updateProgressOnClick(e.clientX);
            }}
          >
            <div className="progress-bar" id="progress-bar"></div>
          </div>
          <video
            id="video-player"
            autoPlay={false}
            controls={false}
            width="100%"
            onTimeUpdate={(e) => {
              updateProgressBar(
                (e.target.currentTime / e.target.duration) * 100
              );
            }}
            playsInline
            onEnded={() => {
              stop();
              watch();
            }}
          >
              <source src={videoUrl} type="video/mp4" id="source" />
          </video>
        </div>
    </>
  )
}

export default VideoPlayer