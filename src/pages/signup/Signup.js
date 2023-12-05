import React, { useState } from "react";
import "./Signup.css";
import logo from "..//../icons/w.svg";
import { ArrowUpload16Filled, Delete16Regular } from "@fluentui/react-icons";

function Signup() {
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onBannerChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBanner(URL.createObjectURL(event.target.files[0]));
      checkFile();
    }
  };
  function checkFile() {
    if (document.getElementById("profile-pic-upload").files.length != 0) {
      console.log("file uploaded");
    }
    if (document.getElementById("profile-banner-upload").files.length != 0) {
      console.log("Banner uploaded");
      document.getElementById("banner-form").remove();
      document.getElementById("login-title").remove();
      let replace = `  <div className="uploaded" id="uploaded">
      <img
        src=${banner}
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
    }
  }
  return (
    <>
      <div className="signup-page">
        <img src={logo} alt="" className="logo" />
        <h1 className="login-title">Account Erstellen</h1>
        <div className="signup-form">
          <form action="" className="signup-form-form">
            <div className="signup-upper-section">
              <div className="signup-username-form">
                <label htmlFor="username">User name</label>
                <input type="text" className="login-input" />
              </div>
              <div className="signup-password-form">
                <label htmlFor="Password">Password</label>
                <input type="password" className="login-input" />
              </div>
            </div>
            <div id="profile-upload">
              <h2 className="login-title">Profile Picture</h2>
              <div className="profile-pic-upload-section">
                <input
                  type="file"
                  id="profile-pic-upload"
                  accept="image/*"
                  name="profile-pic"
                  onChange={onImageChange}
                  className="profile-pic-upload"
                />
                <div className="upload-text">
                  <ArrowUpload16Filled className="nav-icon upload-icon" />
                  <h4>Upload a file or drag and drop</h4>
                  <p>PNG,JPEG up to 10MB</p>
                </div>
              </div>
            </div>
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
                  checkFile(e);
                  onBannerChange(e);
                }}
              />
              <div className="upload-text">
                <ArrowUpload16Filled className="nav-icon upload-icon" />
                <h4>Upload a file or drag and drop</h4>
                <p>PNG,JPEG up to 10MB</p>
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
    </>
  );
}

export default Signup;
