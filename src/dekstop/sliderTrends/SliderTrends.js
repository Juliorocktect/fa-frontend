import React from "react";
import "./SliderTrends.css";
import {
  ChevronLeft12Regular,
  ChevronRight12Regular,
} from "@fluentui/react-icons";
function SliderTrends() {
  let imagesLinks = [
    "https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg",
    "https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/01/green_mountain_nature_wallpaper_hd.jpg",
    "https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg",
    "https://wallpapers.com/images/featured-full/nature-2ygv7ssy2k0lxlzu.jpg",
    "https://www.pixground.com/wp-content/uploads/2023/03/Windows-11-Landscape-Scenery-Wallpaper-4K-Wallpaper-1024x576.webp",
    "https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg",
    "https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg",
    "https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/01/green_mountain_nature_wallpaper_hd.jpg",
    "https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg",
    "https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg",
  ];
  let center = 1;
  let right = 2;
  let left = 0;
  const LENGTH = imagesLinks.length;

  function reset() {
    if (center === LENGTH) {
      center = 0;
    }
    if (left === LENGTH - 1) {
      left = -1;
    }
    if (right === LENGTH + 1) {
      right = 1;
    }
  }
  function next() {
    center++;
    right++;
    left++;
    reset();
    if (right == LENGTH) {
      disable("right");
    } else {
      enable("right");
    }
    var newNode = document.createElement("img");
    newNode.setAttribute("src", imagesLinks[right]);
    newNode.classList.add("right");
    newNode.setAttribute("id", "right");
    var parent = document.getElementById("slider-trends");
    parent.appendChild(newNode);
    document.getElementById("center").setAttribute("id", "left");
    document.getElementById("center").classList.add("left");
    var left = document.getElementById("left");
    parent.removeChild(left);
    console.log("left: " + left);
    console.log("center: " + center);
    console.log("right: ", right);
  }
  function back() {
    if (left > -1) {
      center--;
      right--;
      left--;
      setLeft(imagesLinks[left]);
      setRight(imagesLinks[right]);
      setCenter(imagesLinks[center]);
      console.log("left: " + left);
      console.log("center: " + center);
      console.log("right: ", right);
    } else {
      console.log("left: " + left);
      console.log("center: " + center);
      console.log("right: ", right);
      return;
    }
  }
  function setCenter(newCenter) {
    document.getElementById("center").setAttribute("src", newCenter);
  }
  function setRight(newRight) {
    var rightElement = document
      .getElementById("right")
      .setAttribute("src", newRight);
  }
  function setLeft(newLeft) {
    var leftElement = document.getElementById("left");
    leftElement.setAttribute("src", newLeft);
  }
  function disable(id) {
    document.getElementById(id).classList.add("disabled");
  }
  function enable(id) {
    document.getElementById(id).classList.remove("disabled");
  }
  return (
    <>
      <div className="slider-trend" id="slider-trends">
        <img
          className="image-slider left"
          id="left"
          src="https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg"
        />
        <button className="slider-button" onClick={back}>
          <ChevronLeft12Regular className="slider-arrow" />
        </button>
        <img
          className="image-slider"
          id="center"
          src="https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg"
        />
        <button className="slider-button">
          <ChevronRight12Regular className="slider-arrow" onClick={next} />
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
