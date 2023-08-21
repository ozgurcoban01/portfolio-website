import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import Content from "./Content.js";
import PortfolioContent from "./PortfolioContent.js";
import Navbar from "./Navbar.js";

import d3dboothdesign from "../assets/portfolio/d3dboothdesign.jpeg";
import alisverisfestivali from "../assets/portfolio/alisverisfestivali.jpg";
import alisverisfestivaliv from "../assets/portfolio/alisverisfestivali.mp4";
import buldingcladding from "../assets/portfolio/buldingcladding.jpg";
import carraffle from "../assets/portfolio/carraffle.jpg";
import carrafflestory from "../assets/portfolio/carrafflestory.jpg";
import carrafflestoryv from "../assets/portfolio/carrafflestory.mp4";
import efsanekasimbasliyor from "../assets/portfolio/efsanekasimbasliyor.jpg";
import efsanekasimbasliyorv from "../assets/portfolio/efsanekasimbasliyor.mp4";
import gamecoupondesign from "../assets/portfolio/gamecoupondesign.jpeg";
import instagrampostfestival from "../assets/portfolio/instagrampostfestival.jpeg";
import instagramreels from "../assets/portfolio/instagramreels.jpg";
import instagramreelsv from "../assets/portfolio/instagramreels.mp4";
import instagramstoryproduct from "../assets/portfolio/instagramstoryproduct.jpeg";
import instagramstoryvalentineday from "../assets/portfolio/instagramstoryvalentineday.jpeg";
import metrobusdressing from "../assets/portfolio/metrobusdressing.jpg";
import nescafegold from "../assets/portfolio/nescafegold.jpg";
import nescafegoldv from "../assets/portfolio/nescafegold.mp4";
import newyear from "../assets/portfolio/newyear.jpg";
import newyearv from "../assets/portfolio/newyear.mp4";
import raffleinstagrampost from "../assets/portfolio/raffleinstagrampost.jpeg";
import rafflescooterpost from "../assets/portfolio/rafflescooterpost.jpeg";
import remembranceday from "../assets/portfolio/remembranceday.jpg";
import remembrancedayv from "../assets/portfolio/remembranceday.mp4";
import valentineday from "../assets/portfolio/valentineday.jpeg";
import victoryday from "../assets/portfolio/victoryday.jpg";
import victorydayv from "../assets/portfolio/victoryday.mp4";

const Portfolio = () => {
 
  const popHupContents = [
    {
      intext: "3D Booth Design",
      image: d3dboothdesign,
      video: d3dboothdesign,
    },{
      intext: "Alışveriş Festivali",
      image: alisverisfestivali,
      video: alisverisfestivaliv,
    },{
      intext: "Building Cladding",
      image: buldingcladding,
      video: buldingcladding,
    },{
      intext: "Car Raffle",
      image: carraffle,
      video: carraffle,
    },{
      intext: "Car Raffle Story",
      image: carrafflestory,
      video: carrafflestoryv,
    },{
      intext: "Efsane Kasım Başlıyor",
      image: efsanekasimbasliyor,
      video: efsanekasimbasliyorv,
    },{
      intext: "Game Coupon Desing",
      image: gamecoupondesign,
      video: gamecoupondesign,
    },{
      intext: "Instagram Post Festival",
      image: instagrampostfestival,
      video: instagrampostfestival,
    },{
      intext: "Instagram Reels",
      image: instagramreels,
      video: instagramreelsv,
    },{
      intext: "Instagram Story Product",
      image: instagramstoryproduct,
      video: instagramstoryproduct,
    },{
      intext: "Instagram Valentine Day",
      image: instagramstoryvalentineday,
      video: instagramstoryvalentineday,
    },{
      intext: "Metrobus Dressing",
      image: metrobusdressing,
      video: metrobusdressing,
    },{
      intext: "Nescafe Gold",
      image: nescafegold,
      video: nescafegoldv,
    },{
      intext: "New Year",
      image: newyear,
      video: newyearv,
    },{
      intext: "Instagram Raffle Post",
      image: raffleinstagrampost,
      video: raffleinstagrampost,
    },{
      intext: "Raffle Scooter",
      image: rafflescooterpost,
      video: rafflescooterpost,
    },{
      intext: "Remembrance Day",
      image: remembranceday,
      video: remembrancedayv,
    },{
      intext: "Valentine Day",
      image: valentineday,
      video: valentineday,
    },{
      intext: "Victory Day",
      image: victoryday,
      video: victorydayv,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="portfolioContainer ">
        <div className="portfolioPageLayer1">
     
          <div className="portfolioText">Portfolio</div>

        </div>

        <div className="portfolioContentContainer">
          {popHupContents.map((popHupContent) => (
            <PortfolioContent data={popHupContent} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
