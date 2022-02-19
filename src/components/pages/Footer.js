import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerHeader">
        <AcUnitIcon className="footerLogo" />

        <h6 className="footerText">TurisTienda</h6>
      </div>

      <div className="footerIcons">
        <InstagramIcon className="icon1" />
        <FacebookIcon className="icon2" />
        <YouTubeIcon className="icon3" />
        <TwitterIcon className="icon4" />
      </div>

<div className="footerBottom">

  <p >
  © Turistienda 2022. Amamos viajar!
  </p>


</div>

    </div>
  );
};

export default Footer;
