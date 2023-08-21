import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import Content from "./Content.js";
import Navbar from "./Navbar.js";

const PortfolioContent = (props) => {
  const [pophupContent, setPopHupContent] = useState(false);

  const pictureURL = props.data.image;
  const pictureVideo = props.data.video;
  const urlCheck = pictureVideo.slice(-1);
  console.log(urlCheck);

  return (
    <>
      <div className={`popHup ${pophupContent ? "pophupContentActive" : ""}`}>
        <div onClick={() => setPopHupContent(false)} className="exit">
          X
        </div>
        <div className="pophupContent">
          {urlCheck == 4 ? (
            <video controls>
              <source src={pictureVideo} type="video/mp4"></source>
            </video>
          ) : (
            <img src={pictureURL}></img>
          )}
        </div>
      </div>
      <div onClick={() => setPopHupContent(true)} className="portfolioContent">
        <img src={pictureURL}></img>
        <div className="portfolioContentText">{props.data.intext}</div>
      </div>
    </>
  );
};

export default PortfolioContent;
