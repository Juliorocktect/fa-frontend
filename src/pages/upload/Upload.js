import React from "react";
import W from "../login/w.svg";

function Upload() {
  return (
    <>
      <div className="signup-container">
        <div className="signup-page">
          <img src={W} alt="" className="logo" />
          <h1 className="login-title">Video hochladen</h1>
          <div className="signup-form">
            <div className="upload-form">
              <div className="signup-upper-section">
                <div className="signup-username-form">
                  <label htmlFor="title">Title</label>
                  <input type="text" name="" id="" className="signup-input" />
                </div>
                <div className="signup-username-form">
                  <label htmlFor="title">Description</label>
                  <input type="text" name="" id="" className="signup-input" />
                </div>
              </div>
              <div className="thumbnail-upload-section"></div>
            </div>
            <div className="video-upload-section"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
