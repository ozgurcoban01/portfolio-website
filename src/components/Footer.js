import React from "react";
import "../styles/footer.css";

import behance from "../assets/png1.png";
import insta from "../assets/png2.png";
import wp from "../assets/png3.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="contentContainer">
        <div className="footerLayers footerLayer1">
          <p>
            <h3>Özgür Çoban</h3>
            <br></br>
            Lisede grafik tasarım bölümünün bana uygun olmadığını anladığımda yazılımcı olmaya karar verdim.
            <br></br>Meslek lisesinden mühendislik kazanmam kolay olmasada başardım. 
            <br></br>   <br></br>
            Şimdi sürekli proje geliştirip tecrübe kazanmaya, kendini geliştirmeye çalışan, hevesli bir gencim :)

          </p>
        </div>
        <div className="footerLayers footerLayer2">
          <p>
            E-Mail: cobanozgur55@gmail.com<br></br>
            Whatsapp: +90 545 281 22 15
          </p>
        </div>
        <div className="footerLayers footerLayer3">
            <a href="https://www.linkedin.com/in/ozgur-coban-lnkdn/" target="_blank" className="footer-logo"><img  src={behance} className="footer-logo behance" ></img></a>
            <a href="https://github.com/ozgurcoban01" target="_blank" className="footer-logo"><img  src={wp} className="footer-logo wp"></img></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
