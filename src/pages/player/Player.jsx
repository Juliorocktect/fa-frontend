import React, { useEffect, useState } from "react";
import {
  Bookmark20Regular,
  Bookmark20Filled,
  Heart16Regular,
  Heart16Filled,
} from "@fluentui/react-icons";
import { AddCircle12Regular } from "@fluentui/react-icons";
import "./Player.css";
import NavbarDesk from "../../dekstop/navbar/NavbarDesk";
import { getSession } from "../../Cookie";
import { useSearchParams } from "react-router-dom";
import NotFound from "../../components/notFound/NotFound";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";

function Player() {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState(null);
  const [saved, setSaved] = useState(false);
  const [liked,setLiked] = useState(false);
  const [playStatus,setPlayStatus] = useState(false);
  const [load, setLoad] = useState(false);
  var watched = false;



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
        setLoad(true);
      })
      .catch((error) => console.log("error", error));
  }
  function subscribe() {
    document.getElementById("subscribe-button").classList.add("to-check");
    setTimeout(() => {
      document.getElementById("subscribe-button").remove();
      document.getElementById(
        "subscribe-button-container"
      ).innerHTML += `<svg class="subscribed ___12fm75w_v8ls9a0 f1w7gpdv fez10in fg4l7m0" id="subed" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm2.12 4.16L7.25 9.04l-1.4-1.4a.5.5 0 1 0-.7.71L6.9 10.1c.2.2.5.2.7 0l3.23-3.23a.5.5 0 0 0-.71-.7Z" fill="currentColor"></path></svg>`;
    }, 290);
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
    if (!liked) {
      setLiked(true)
    } else {
      setLiked(false);
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
      setSaved(true);
    } else {
      setSaved(false);
    }
  }
  //TODO: add animations to like and save
  //TODO: all icons in div
  //TODO: add css transition to controls and progress bar
  //TODO: controls in fullscreen
  //TODO: add settings + volume slider


  if (videoData == null) {
    return (<>
      {
        load && <NotFound/>
      }
    </>);
  }
  return (
    <>
      <NavbarDesk></NavbarDesk>
      <div className="player">
        {load && (<VideoPlayer videoUrl={videoData.videoUrl} videoId={videoData.id}/>)}
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
            <div className="heart" id="heart" onClick={like}>
              {!liked && <Heart16Regular className="nav-icon"/>}
              {
                liked && <Heart16Filled className="nav-icon"/>
              }
            </div>
            <div className="bookmark" id="save-icon" onClick={save}>
              {!saved && <Bookmark20Regular className="nav-icon" />}
              {saved && <Bookmark20Filled className="nav-icon" />}
            </div>
            <div className="add" id="subscribe-button-container">
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
        <div className="video-recommended video-container-container">
          <div id="video-container"></div>
        </div>
      </div>
    </>
  );
}

export default Player;
