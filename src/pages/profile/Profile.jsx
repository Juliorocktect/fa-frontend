import React, { useState } from "react";
import "./Profile.css";
import { ArrowLeft12Filled, AddCircle12Regular } from "@fluentui/react-icons";
import Video from "../../components/video/Video";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import NavbarDesk from "../../dekstop/navbar/NavbarDesk";
import { useEffect } from "react";
import NotFound from "../../components/notFound/NotFound";
function Profile() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [videosUploaded, setVideosUploaded] = useState([]);
  const [videosLoaded, setVideosLoaded] = useState(false);
  var subscribed = false;

  async function fetchPrimaryData() {
    try {
      const response1 = await fetch(
        "http://192.168.178.95:9090/user/getUser?userId=" +
          searchParams.get("id")
      );
      const data = await response1.json();
      console.log(data);
      var urls = [];
      data.videosUploaded.forEach((id) => {
        urls.push(
          fetch(
            "http://192.168.178.95:9090/video/getVideoById?videoId=" + id
          ).then((res) => res.json())
        );
      });
      const data2 = await Promise.all(urls);
      setVideosUploaded(data2);
      setVideosLoaded(true);
      setUser(data);
      setLoading(true);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    fetchPrimaryData();
  }, []);
  //TODO: load uploaded videos

  function subscribe() {
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
  if (searchParams.get("id") === "" || user == null) {
    return (
      <>
        <NotFound />
      </>
    );
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
              {loading && <img src={user.pictureUrl} id="profile-pic" />}
            </div>
            <div className="profile-title">
              <h3 className="profile-title-h3">{loading && user.userName}</h3>
              <h6 className="profile-title-h6">
                {loading && user.subs} Abonnenten
              </h6>
            </div>
          </div>
        </div>
        <div className="profile-banner">
          {loading && (
            <img
              src={user.bannerUrl}
              alt=""
              className="profile-banner-img"
              id="profile-banner"
            />
          )}
        </div>
        <div className="desk-bottom-section" id="profile-bottom">
          <div className="profile-name">
            <div className="profile-title-img">
              {loading && (
                <img
                  src={user.pictureUrl}
                  alt=""
                  className="profile-pic"
                  id="profile-pic-id-desk"
                />
              )}
            </div>
            <div className="profile-title">
              <h3 className="profile-title-h3">{loading && user.userName}</h3>
              <h6 className="profile-title-h6">{user.subs} Abonnenten</h6>
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
        <div className="video-container-container">
          <div className="video-container" id="videoContainer">
            {videosLoaded &&
              videosUploaded.map((video) => (
                <Video
                  preview={video.thumbnailUrl}
                  profile={video.profilePicture}
                  title={video.title}
                  description={video.description}
                  videoId={video.id}
                  profileId={video.authorId}
                />
              ))}
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </>
  );
}
export default Profile;
