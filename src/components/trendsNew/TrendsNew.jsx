import React, { useEffect, useState } from "react";
import "./TrendsNew.css";
import {
  ChevronLeft16Regular,
  ChevronRight16Regular,
  HeartCircle16Filled,
} from "@fluentui/react-icons";

function TrendsNew() {
  const [images, setImages] = useState([]);
  const [load, setLoad] = useState(false);
  const [current, setCurrent] = useState(0);
  var counter = 0;
  const ids = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://192.168.178.95:9090/video/trends", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setImages(result);
        console.log(result);
        setLoad(true);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    var point = document.getElementsByClassName("point");
    for (let i = 0; i < point.length; i++) {
      point.item(i).classList.remove("point-active");
    }
    counter = current;
    document.getElementById(ids[current]).classList.add("point-active");
    console.log(counter);
    slide();
  }, [current]);

  function slide() {
    var imagesById = document.querySelectorAll("#carousel-img");
    imagesById.forEach((img, index) => {
      img.style.left = index * 100 + "%";
    });
    imagesById.forEach((img) => {
      img.style.transform = `translateX(-${counter * 100}%)`;
    });
  }

  function next() {
    if (counter < images.length - 2) {
      counter++;
      console.log(counter);
      setCurrent(counter);
    }
  }
  function before() {
    if (counter > 0) {
      counter--;
      setCurrent(counter);
    }
  }
  return (
    <>
      <div className="trends-carousel">
        <div id="wrapper">
          <div className="carousel-button-container">
            <button className="carousel-button" id="prev" onClick={before}>
              <ChevronLeft16Regular className="nav-icon carousel-icon" />
            </button>
          </div>
          <div id="image-container">
            <div id="image-carousel">
              <img
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                id="carousel-img"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                id="carousel-img"
              />
              <img
                src="https://images.unsplash.com/photo-1561908818-526e64312efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                alt=""
                id="carousel-img"
              />
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                id="carousel-img"
              />
              <img
                src="https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                id="carousel-img"
              />
              <img
                src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                id="carousel-img"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1663134285459-0022b0e78970?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                id="carousel-img"
              />
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                id="carousel-img"
              />
              <img
                src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                id="carousel-img"
              />
            </div>
          </div>
          <div className="carousel-button-container">
            <button className="carousel-button" id="next" onClick={next}>
              <ChevronRight16Regular className="nav-icon carousel-icon" />
            </button>
          </div>
        </div>
        <div className="bottom-section-carousel">
          <div className="current">
            <div
              className="point point-active"
              id="one"
              onClick={() => {
                setCurrent(0);
              }}
            ></div>
            <div
              className="point"
              id="two"
              onClick={() => {
                setCurrent(1);
              }}
            ></div>
            <div
              className="point"
              id="three"
              onClick={() => {
                setCurrent(2);
              }}
            ></div>
            <div
              className="point"
              id="four"
              onClick={() => {
                setCurrent(3);
              }}
            ></div>
            <div
              className="point"
              id="five"
              onClick={() => {
                setCurrent(4);
              }}
            ></div>
            <div
              className="point"
              id="six"
              onClick={() => {
                setCurrent(5);
              }}
            ></div>
            <div
              className="point"
              id="seven"
              onClick={() => {
                setCurrent(6);
              }}
            ></div>
            <div
              className="point"
              id="eight"
              onClick={() => {
                setCurrent(7);
              }}
            ></div>
            <div
              className="point"
              id="nine"
              onClick={() => {
                setCurrent(8);
              }}
            ></div>
            <div
              className="point"
              id="ten"
              onClick={() => {
                setCurrent(9);
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendsNew;
