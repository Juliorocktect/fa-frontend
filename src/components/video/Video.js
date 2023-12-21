import React from "react";
import "./Video.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "./l.jpg";
function Video({ preview, profile, title, description, videoId }) {
  const location = "/player?id=" + videoId;
  const locationProfile = "/profile?=" + videoId;
  return (
    <>
      <div className="video" id="video">
        <a href={location}>
          <div className="video-top-section" id="video-top-section">
            <LazyLoadImage
              sizes="(max-width: 600px)"
              className="preview-img"
              src={preview}
              alt="preview"
              id="preview-img"
              loading="lazy"
              fetchpriority="high"
              decoding="async"
              effect="blur"
              placeholderSrc={placeholder}
            />
          </div>
        </a>
        <div
          className="video-description-section"
          id="video-description-section"
        >
          <a href={locationProfile}>
            <div className="profile-section" id="profile-section">
              <img
                src="http://192.168.178.95/videos/00f97beb-5351-446b-a6b7-01e3abdbad68/00f97beb-5351-446b-a6b7-01e3abdbad68.jpeg"
                className="video-profile-pic"
                id="video-profile-pic"
                loading="lazy"
                fetchpriority="high"
                decoding="async"
                sizes="(max-width: 100px)"
                width="600"
                height="400"
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
