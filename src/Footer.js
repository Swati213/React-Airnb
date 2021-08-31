import React from "react";
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <p>© 2021 Airbnb, Inc.·Privacy·Terms·Sitemap·Company details</p>
        <p className="social-icons">
        
          <LanguageIcon />
          
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="https://www.twitter.com">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com">
            
            <InstagramIcon />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
