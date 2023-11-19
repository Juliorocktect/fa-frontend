import React from "react";

function Player() {
  return (
    <>
      <video width="100%" height="300" controls>
        <source src="./video.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default Player;
