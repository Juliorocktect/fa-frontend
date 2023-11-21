import React from "react";
import "./SliderTrends.css";
import {
  ChevronLeft12Regular,
  ChevronRight12Regular,
} from "@fluentui/react-icons";

function SliderTrends() {
  return (
    <>
      <div className="slider-trend">
        <button className="slider-button">
          <ChevronLeft12Regular className="slider-arrow" />
        </button>
        <div className="img-slider-container">
          <img
            className="image-slider"
            id="image-slider1"
            src="https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg"
          />
          <img
            className="image-slider left"
            id="image-slider2"
            src="https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg"
          />
          <img
            className="image-slider right"
            id="image-slider3"
            src="https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/01/green_mountain_nature_wallpaper_hd.jpg"
          />
        </div>
        <button className="slider-button">
          <ChevronRight12Regular className="slider-arrow" />
        </button>
      </div>
    </>
  );
}

export default SliderTrends;
