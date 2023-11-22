import React from "react";
import "./SliderTrends.css";
import {
  ChevronLeft12Regular,
  ChevronRight12Regular,
} from "@fluentui/react-icons";

function SliderTrends() {
  let images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let imagesLinks = [
    "https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg",
    "https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/01/green_mountain_nature_wallpaper_hd.jpg",
    "https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg",
    "https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg",
    "https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg",
    "https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/01/green_mountain_nature_wallpaper_hd.jpg",
    "https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg",
    "https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg",
    "https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg",
  ];
  let current = 1;
  let right = 2;
  let left = 10;
  function next() {}
  function setLeft(newLeft) {
    let left = document.getElementsById("left");
  }
  return (
    <>
      <div className="slider-trend">
        <img
          className="image-slider left"
          id="left"
          src="https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg"
        />
        <button className="slider-button">
          <ChevronLeft12Regular className="slider-arrow" />
        </button>
        <img
          className="image-slider"
          id="center"
          src="https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg"
        />
        <button className="slider-button">
          <ChevronRight12Regular className="slider-arrow" />
        </button>
        <img
          className="image-slider right"
          id="right"
          src="https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/01/green_mountain_nature_wallpaper_hd.jpg"
        />
      </div>
    </>
  );
}

export default SliderTrends;
