import React from "react";
import "./Video.css";
import { useNavigate } from "react-router-dom";
function Video({ preview, profile, title, description, videoId }) {
  const nav = useNavigate();
  const location = "/player?id=" + videoId;
  return (
    <>
      <div className="video" id="video">
        <a href={location}>
          <div className="video-top-section" id="video-top-section">
            <img
              src={preview}
              alt="preview"
              className="preview-img"
              id="preview-img"
            />
          </div>
        </a>
        <div
          className="video-description-section"
          id="video-description-section"
        >
          <a href="/profile?id=">
            <div className="profile-section" id="profile-section">
              <img
                src={profile}
                className="video-profile-pic"
                id="video-profile-pic"
              />
            </div>
          </a>
          <div className="data-section" id="data-section">
            <h3 className="video-title" id="video-title">
              {title}
            </h3>
            <h6 className="video-description" id="video-description">
              {description}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
