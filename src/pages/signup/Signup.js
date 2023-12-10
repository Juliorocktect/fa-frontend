import React, { useState } from "react";
import "./Signup.css";
import logo from "..//../icons/w.svg";
import { ArrowUpload16Filled, Delete16Regular } from "@fluentui/react-icons";

function Signup() {
  const [picture, setPicture] = useState(Object);
  const [banner, setBanner] = useState(Object);
  var profileUploaded = "";

  function removePicture(which) {
    if (which == 1) {
      console.log("called");
      setPicture(new Object());
      document.getElementById("profile-upload").innerHTML = "";
      document.getElementById("profile-upload").innerHTML = profileUploaded;
    } else {
      setPicture(new Object());
      document.getElementById("banner-upload").innerHTML = "";
      document.getElementById("banner-upload").innerHTML = profileUploaded;
    }
  }
  function renderPicture(pictureURL) {
    if (picture != 0) {
      profileUploaded = document.getElementById("profile-upload").innerHTML;
      document.getElementById("profile-form").remove();
      document.getElementById("profile-heading").remove();
      let replaceStr = `<div className="uploaded" id="uploaded">
      <img
        src=""
        alt=""
        className="signup-img"
        id="signup-img-profile"
      />
      <button className="remove-btn" id="remove-btn">
        <Delete16Regular />
        Remove
      </button>
    </div>`;
      document.getElementById("profile-upload").innerHTML += replaceStr;
      document
        .getElementById("signup-img-profile")
        .setAttribute("src", pictureURL);
    }
    document.getElementById("remove-btn").onclick = (e) => {
      e.preventDefault();
      removePicture(1);
    };
  }

  function renderBanner(bannerURL) {
    if (banner != 0) {
      document.getElementById("banner-form").remove();
      document.getElementById("login-title").remove();
      let replace = `  <div className="uploaded" id="uploaded">
      <img
        src=""
        alt=""
        className="signup-img"
        id="signup-img"
      />
      <button className="remove-btn" id="remove-btn">
        <Delete16Regular />
        Remove
      </button>
    </div>`;
      var parent = (document.getElementById("profile-upload").innerHTML +=
        replace);
      document.getElementById("signup-img").setAttribute("src", bannerURL);
      document.getElementById("remove-btn").onclick = (e) => {
        e.preventDefault();
        removePicture(2);
      };
    }
  }
  return (
    <>
      <div className="signup-container">
        <div className="signup-page">
          <img src={logo} alt="" className="logo" />
          <h1 className="login-title">Account Erstellen</h1>
          <div className="signup-form">
            <form action="" className="signup-form-form">
              <div className="signup-upper-section">
                <div className="signup-username-form">
                  <label htmlFor="username">User name</label>
                  <input type="text" className="signup-input" />
                </div>
                <div className="signup-password-form">
                  <label htmlFor="Password">Password</label>
                  <input type="password" className="signup-input" />
                </div>
              </div>
              <div id="profile-upload">
                <h2 className="login-title" id="profile-heading">
                  Profile Picture
                </h2>
                <div className="profile-pic-upload-section" id="profile-form">
                  <input
                    type="file"
                    id="profile-pic-upload"
                    accept="image/*"
                    name="profile-pic"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        e.preventDefault();
                        setPicture(e.target.files);
                        var image = [];
                        image.push(e.target.files[0]);
                        renderPicture(URL.createObjectURL(new Blob(image)));
                      }
                    }}
                    className="profile-pic-upload"
                  />
                  <div className="upload-text">
                    <ArrowUpload16Filled className="nav-icon upload-icon" />
                    <h4>Upload a file or drag and drop</h4>
                    <p>PNG,JPEG up to 10MB</p>
                  </div>
                </div>
              </div>
              <div id="banner-upload">
                <h2 className="login-title" id="login-title">
                  Profile Banner
                </h2>
                <div className="profile-pic-upload-section" id="banner-form">
                  <input
                    type="file"
                    id="profile-banner-upload"
                    accept="image/*"
                    name="banner"
                    className="profile-pic-upload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        e.preventDefault();
                        setBanner(e.target.files);
                        var image = [];
                        image.push(e.target.files[0]);
                        renderBanner(URL.createObjectURL(new Blob(image)));
                      }
                    }}
                  />
                  <div className="upload-text">
                    <ArrowUpload16Filled className="nav-icon upload-icon" />
                    <h4>Upload a file or drag and drop</h4>
                    <p>PNG,JPEG up to 10MB</p>
                  </div>
                </div>
              </div>
              <div className="sign-up-bottom">
                <div className="submit-container">
                  <button className="sign-up-button-cancel">Cancel</button>
                  <button className="sign-up-button">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
