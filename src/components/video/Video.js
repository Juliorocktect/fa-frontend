import React from "react";
import "./Video.css";
import { useNavigate } from "react-router-dom";
function Video({ preview, profile }) {
  const nav = useNavigate();
  return (
    <>
      <div className="video">
        <div className="video-top-section">
          <img src={preview} alt="preview" srcset="" className="preview-img" />
        </div>
        <div className="video-description-section">
          <div className="profile-section">
            <img
              src={profile}
              alt=""
              className="video-profile-pic"
              onClick={() => {
                nav("/profile/");
              }}
            />
          </div>
          <div className="data-section">
            <h3 className="video-title">GPT has been unleashed</h3>
            <h6 className="video-description">
              Fireship · 661.557 Aufrufe · vor 4 Tagen
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
