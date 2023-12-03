import React from "react";
import {
  ChevronLeft12Regular,
  ChevronRight12Regular,
  CurrencyDollarEuro16Filled,
} from "@fluentui/react-icons";

import "./Trends.css";

function Trends() {
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
  let current = 1;
  //TODO: in neue Methoden refactoren und verschönern
  function next() {
    if (current < imagesLinks.length - 1) {
      var center = document.getElementById("center");
      var parent = document.getElementById("slider-trends");
      var buttonRight = document.getElementById("button-next");
      var right = document.getElementById("right");
      var newRight = createNewRight();
      var buttonleft = document.getElementById("button-back");
      var left = document.getElementById("left");
      center.after(buttonleft);
      right.after(buttonRight);
      center.classList.add("left");
      parent.removeChild(left);
      center.id = "left";
      right.classList.remove("right");
      right.id = "center";
      setTimeout(() => {
        buttonRight.after(newRight);
      }, 320);
      console.log(current);
      current++;
    }
  }
  function createNewRight() {
    var newRight = document.createElement("img");
    if (imagesLinks[current + 2] == null) {
      newRight.classList.add("disabled");
    }
    newRight.setAttribute("src", imagesLinks[current + 2]);
    newRight.classList.add("right");
    newRight.classList.add("image-slider");
    newRight.id = "right";
    return newRight;
  }
  function createNewLeft() {
    var newLeft = document.createElement("img");
    newLeft.setAttribute("src", imagesLinks[current - 2]);
    newLeft.classList.add("left");
    newLeft.classList.add("image-slider");
    newLeft.id = "left";
    return newLeft;
  }
  function back() {
    if (current > 0) {
      var center = document.getElementById("center");
      var right = document.getElementById("right");
      var parent = document.getElementById("slider-trends");
      var left = document.getElementById("left");
      var buttonLeft = document.getElementById("button-back");
      var buttonRight = document.getElementById("button-next");
      var newLeft = createNewLeft();
      // unload right
      parent.removeChild(right);
      //make left center
      left.classList.remove("left");
      left.before(buttonLeft);
      left.id = "center";
      // make center right
      center.classList.add("right");
      center.id = "right";
      center.before(buttonRight);
      // fix button positions
      buttonLeft.before(newLeft);
      //load new left module
      current--;
    }
  }
  return (
    <>
      <div className="slider-trend" id="slider-trends">
        <img
          className="image-slider left"
          id="left"
          src="https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg"
        />
        <button className="slider-button" onClick={back} id="button-back">
          <ChevronLeft12Regular className="slider-arrow" />
        </button>
        <img
          className="image-slider"
          id="center"
          src="https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg"
        />
        <button className="slider-button" id="button-next">
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

export default Trends;
