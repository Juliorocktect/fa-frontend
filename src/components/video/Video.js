import React from "react";
import "./Video.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "./l.jpg";
function Video({
  preview,
  profile,
  title,
  description,
  videoId,
  mode,
  profileId,
}) {
  const location = "/player?id=" + videoId;
  const locationProfile = "/profile?id=" + profileId;
  if ("small" === mode) {
    return (
      <>
        <div className="video" id="video-small">
          <a href={location}>
            <div className="video-top-section" id="video-top-section">
              <LazyLoadImage
                sizes="(max-width: 600px)"
                className="preview-img-small"
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
                  src={profile}
                  className="video-profile-pic-small"
                  id="video-profile-pic-small"
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
              <h3 className="video-title smaller-title" id="video-title">
                {title}
              </h3>
              <p
                className="video-description smaller-description"
                id="video-description"
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
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
                src={profile}
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
