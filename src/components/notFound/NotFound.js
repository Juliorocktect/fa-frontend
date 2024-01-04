import React from "react";
import forest from "./steven-kamenar-MMJx78V7xS8-unsplash.jpg";
import "./NotFound.css";
import imf from "./notFoundO.png";

function NotFound({ mode }) {
  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({
      x: null,
      y: null,
    });
    React.useEffect(() => {
      const updateMousePosition = (ev) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);
    return mousePosition;
  };
  const mouse = useMousePosition();
  const styles = {
    transform: `translate(${mouse.x - window.innerWidth / 15}px, ${
      mouse.y - window.innerHeight / 15
    }px)`,
  };
  if (mode === "fancy") {
    return (
      <>
        <div className="black-filter">
          <div className="not-found-image">
            <div className="back-section">
              <h1 className="not-title">Seite nicht gefunden</h1>
              <button
                className="back-btn"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Zurück
              </button>
            </div>
            <div className="blob" style={styles}></div>
            <img src={forest} alt="" className="not-found-img" />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="imf-container">
        <h1 className="not-title">Not Found</h1>
        <h1 className="back-title">404</h1>

        <img src={imf} alt="" className="imf-img" />
        <button
          className="btn-back"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Zurück
        </button>
      </div>
    </>
  );
}

export default NotFound;
