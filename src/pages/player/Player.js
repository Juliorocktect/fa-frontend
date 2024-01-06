import React, { useEffect, useState } from "react";
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
import { useSearchParams } from "react-router-dom";
import NotFound from "../../components/notFound/NotFound";
import BookMarkFilled from "./bookmarkFilled.svg";

function Player() {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState(null);
  let hasLiked = false;
  let playStatus = false;
  let saved = false;
  var seconds = 0;
  var tens = 0;
  var Interval;
  const [load, setLoad] = useState(false);
  var watched = false;

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

  useEffect(() => {
    fetchVideoData();
  }, []);

  function fetchVideoData() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://192.168.178.95:9090/video/getVideoById?videoId=" +
        searchParams.get("id"),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideoData(result);
        console.log(videoData);
        //TODO:renew
        setLoad(true);
        document.getElementById("video-player").innerHTML = `<source
      src="${videoData.videoUrl}"
      type="video/mp4"
      id="source"
      />`;
      })
      .catch((error) => console.log("error", error));
  }
  function playVideo() {
    let video = document.getElementById("video-player");
    if (playStatus) {
      video.pause();
      displayPaused();
      stop();
      playStatus = false;
    } else {
      video.play();
      displayPlay();
      startTimerFn();
      playStatus = true;
    }
  }
  function subscribe() {
    document.getElementById("subscribe-button").classList.add("to-check");
    setTimeout(() => {
      document.getElementById("subscribe-button").remove();
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
    if (!navigator.userAgent.indexOf("Safari")) {
      document.getElementById("video-player").classList += "";
    } else {
      video.requestFullscreen();
    }
  }
  function updateProgressBar(width) {
    document.getElementById("progress-bar").style.width = width + "%";
  }
  function buildLikeUrl() {
    const url = new URL("http://localhost:9090/user/like");
    url.searchParams.append("videoId", searchParams.get("id"));
    url.searchParams.append("session", getSession());
    return url.toString();
  }
  function like() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    fetch(buildLikeUrl(), requestOptions)
      .then((response) => response.text())
      .then((result) => null)
      .catch((error) => console.log("error", error));
    if (!hasLiked) {
      document.getElementById("heart").remove();
      var heart = document.createElement("div");
      heart.id = "heartFilled";
      heart.innerHTML = `<svg class="nav-icon ___12fm75w_v8ls9a0 f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.54 3.95a3.25 3.25 0 0 0-4.6-.01 3.25 3.25 0 0 0 .02 4.6l4.7 4.7c.2.2.52.2.71 0l4.69-4.68a3.25 3.25 0 0 0-4.61-4.6l-.46.44-.45-.45Z" fill="currentColor"></path></svg>`;
      heart.classList += "nav-icon";
      document.getElementById("save-icon").before(heart);
      heart.addEventListener("click", like);
      hasLiked = true;
    } else {
      document.getElementById("heartFilled").remove();
      var newHeart = document.createElement("div");
      newHeart.id = "heart";
      newHeart.innerHTML = `<svg class="nav-icon ___12fm75w_v8ls9a0 f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.54 3.95a3.25 3.25 0 0 0-4.6-.01 3.25 3.25 0 0 0 .02 4.6l4.7 4.7c.2.2.52.2.71 0l4.69-4.68a3.25 3.25 0 0 0-4.61-4.6l-.46.44-.45-.45Zm4.8 3.9-4.32 4.33-4.36-4.36a2.25 2.25 0 0 1 0-3.18c.87-.87 2.3-.87 3.17.01l.81.81c.2.2.53.2.72 0l.79-.8c.88-.88 2.3-.87 3.19.01.88.88.88 2.3 0 3.18Z" fill="currentColor"></path></svg>`;
      newHeart.classList += "nav-icon";
      document.getElementById("save-icon").before(newHeart);
      newHeart.addEventListener("click", like);
      hasLiked = false;
    }
  }
  function save() {
    if (!saved) {
      var requestOptions = {
        method: "POST",
        redirect: "follow",
      };
      var url = new URL("http://192.168.178.95:9090/user/addToSaved");
      url.searchParams.set("session", getSession());
      url.searchParams.set("videoId", searchParams.get("id"));
      fetch(url.toString(), requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      document.getElementById("save-icon").innerHTML = "";
      saved = true;
    } else {
      saved = false;
    }
  }
  //TODO: add animations to like and save
  //TODO: all icons in div
  //TODO: add css transition to controls and progress bar
  //TODO: controls in fullscreen
  //TODO: add settings + volume slider

  function watch() {
    var requestOptions = {
      method: "POST",
      redirect: "manual",
    };

    fetch(
      "http://192.168.178.95:9090/user/watch?session=" +
        getSession() +
        "&videoId=" +
        searchParams.get("id"),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => null)
      .catch((error) => console.log("error", error));
  }
  if (videoData == null || searchParams.get("id") === "") {
    return <NotFound />;
  }
  return (
    <>
      <NavbarDesk></NavbarDesk>
      <div className="player">
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
          <div className="progress">
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
            {load && (
              <source src={videoData.videoUrl} type="video/mp4" id="source" />
            )}
          </video>
        </div>
        <div className="player-account">
          <div className="player-account-front">
            <img
              src={videoData.thumbnailUrl}
              alt=""
              className="player-profile-picure"
              onClick={() => {
                alert(getSession());
              }}
            />
            <h1 className="player-title" id="player-title">
              {videoData.title}
            </h1>
          </div>
          <div className="player-account-back" id="player-account-back">
            <div className="heart" id="heart">
              <Heart16Regular className="nav-icon" onClick={like} />
            </div>
            <div className="bookmark" id="save-icon" onClick={save}>
              <Bookmark20Filled className="nav-icon" />
            </div>
            <div className="add">
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
      </div>
    </>
  );
}

export default Player;
