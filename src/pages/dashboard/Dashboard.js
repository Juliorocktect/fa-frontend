import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import Video from "../../components/video/Video";
import w from "../login/w.svg";
import Login from "../login/Login";
import {
  ArrowUpload20Regular,
  Bookmark20Regular,
  Heart20Regular,
  History20Regular,
} from "@fluentui/react-icons";
import { getSession, setSession } from "../../Cookie";
function Dashboard() {
  const [selection, setSelection] = useState("history");
  const [valid, setValid] = useState(false);
  const [savedVideos, setSavedVideos] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [allData, setAllData] = useState([]);
  const [mobileLoaded, setMobileLoaded] = useState(false);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "http://192.168.178.95:9090/user/isValid?session=" + getSession(),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        if (result === "true") {
          setValid(true);
        } else {
          setValid(false);
        }
      })
      .catch((error) => console.log("error", error));
    if (window.innerWidth > 700) {
      fetchMobileData();
    }
  }, []);

  async function fetchMobileData() {
    const data = [
      fetch(
        "http://192.168.178.95:9090/user/liked?session=" + getSession()
      ).then((res) => res.json()),
      fetch(
        "http://192.168.178.95:9090/user/history?session=" + getSession()
      ).then((res) => res.json()),
      fetch(
        "http://192.168.178.95:9090/user/saved?session=" + getSession()
      ).then((res) => res.json()),
      fetch(
        "http://192.168.178.95:9090/user/upload?session=" + getSession()
      ).then((res) => res.json()),
    ];
    var response = await Promise.all(data);
    setAllData(response);
    setMobileLoaded(true);
    console.log(response);
  }
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://192.168.178.95:9090/user/" +
        selection +
        "?session=" +
        getSession(),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setSavedVideos(result);
        console.log(result);
        setLoaded(true);
      })
      .catch((error) => console.log("error", error));
    console.log(selection);
  }, [selection]);

  function resetSelected() {
    document.getElementById("history").classList.remove("selected");
    document.getElementById("liked").classList.remove("selected");
    document.getElementById("saved").classList.remove("selected");
    document.getElementById("upload").classList.remove("selected");
  }
  function logout() {
    setSession("");
    window.location.href = "/login";
  }
  //TODO: 700 - 1100px icons
  if (!valid) {
    return (
      <>
        <Login />
      </>
    );
  }
  return (
    <>
      <div className="dashboard">
        <div className="side-section" id="side-section">
          <div className="padd">
            <img alt="" className="logo logo-dash" src={w}></img>
            <div className="mid-section">
              <img
                src="http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
                alt=""
                className="dashboard-profile-img"
              />
              <h2 className="video-title">Jonathan</h2>
            </div>
            <div className="options-list">
              <div
                className="option selected"
                id="history"
                onClick={() => {
                  setSelection("history");
                  resetSelected();
                  document.getElementById("history").classList.add("selected");
                }}
              >
                <li>
                  <History20Regular className="nav-icon" />
                </li>
              </div>
              <div
                className="option"
                id="liked"
                onClick={() => {
                  setSelection("liked");
                  resetSelected();
                  document.getElementById("liked").classList.add("selected");
                }}
              >
                <li>
                  <Heart20Regular className="nav-icon" />
                </li>
              </div>
              <div
                className="option"
                onClick={() => {
                  setSelection("upload");
                  resetSelected();
                  document.getElementById("upload").classList.add("selected");
                }}
                id="upload"
              >
                <li>
                  <ArrowUpload20Regular className="nav-icon" />
                </li>
              </div>
              <div
                className="option"
                id="saved"
                onClick={() => {
                  setSelection("saved");
                  resetSelected();
                  document.getElementById("saved").classList.add("selected");
                }}
              >
                <li>
                  <Bookmark20Regular className="nav-icon" />
                </li>
              </div>
            </div>
            <div className="logout">
              <button
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="content-section video-container" id="dahboard-content">
          {selection === "history" &&
            loaded &&
            savedVideos
              .toReversed()
              .map((video) => (
                <Video
                  preview={video.thumbnailUrl}
                  profile={video.profilePicture}
                  title={video.title}
                  description={video.description}
                  videoId={video.id}
                  profileId={video.authorId}
                />
              ))}
          {selection === "saved" &&
            savedVideos.map((video) => (
              <Video
                preview={video.thumbnailUrl}
                profile={video.profilePicture}
                title={video.title}
                description={video.description}
                videoId={video.id}
                profileId={video.authorId}
              />
            ))}

          {selection === "liked" &&
            savedVideos.map((video) => (
              <Video
                preview={video.thumbnailUrl}
                profile={video.profilePicture}
                title={video.title}
                description={video.description}
                videoId={video.id}
                profileId={video.authorId}
              />
            ))}
          {selection == "upload" &&
            savedVideos.map((video) => (
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

        <label className="video-title-big">Gefällt mir</label>
        <div className="liked history">
          {mobileLoaded &&
            allData[0].map((video) => {
              <Video
                preview={video.thumbnailUrl}
                profile={video.profilePicture}
                title={video.title}
                mode={"small"}
                description={video.description}
              />;
            })}
        </div>
        <label htmlFor="" className="video-title-big">
          Hochgeladen
        </label>
        <div className="uploaded history">
          {" "}
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
        </div>
        <label htmlFor="" className="video-title-big">
          Gespeichert
        </label>
        <div className="saved history">
          {" "}
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
          <Video
            preview={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            profile={
              "http://192.168.178.95/videos/a442def0-e067-478b-a120-1a53a90c97d0/a442def0-e067-478b-a120-1a53a90c97d0.jpeg"
            }
            title={"Hallo"}
            mode={"small"}
            description={"oijdsfiniopuiasd sdasd"}
          />
        </div>
      </div>
      <div className="navbar-home">
        <Navbar className="home-nav"></Navbar>
      </div>
    </>
  );
}

export default Dashboard;
