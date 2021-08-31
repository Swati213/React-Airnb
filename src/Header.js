import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
      <div className="header_center">
        <input type="text" placeholder="Search here" />
        <div className="search33">
          
          <SearchIcon />
        </div>
      </div>
      <div className="right">
          <p>Become A Host</p>
           <LanguageIcon/>
           <ExpandMoreIcon/>
           <AccountCircleIcon/>
      </div>
    </div>
  );
};

export default Header;
