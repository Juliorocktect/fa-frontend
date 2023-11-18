import React from "react";
import "./Video.css";
function Video() {
  return (
    <>
      <div className="video">
        <div className="video-top-section">
          <img
            src="https://wallpapers.com/images/featured-full/nature-2ygv7ssy2k0lxlzu.jpg"
            alt="preview"
            srcset=""
            className="preview-img"
          />
        </div>
        <div className="video-description-section">
          <div className="profile-section">
            <img
              src="https://wallpapers.com/images/featured-full/nature-2ygv7ssy2k0lxlzu.jpg"
              alt=""
              className="video-profile-pic"
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
