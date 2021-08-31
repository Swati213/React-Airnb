import React from "react";
import { useState } from "react";
import Seach from "./Seach";
import { Button } from "@material-ui/core";

import "./Banner.css";
import { useHistory } from "react-router-dom";
const Banner = () => {
    const history=useHistory();
  const [searchData, setSearchData] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {searchData && <Seach />}

        <Button
          onClick={() => setSearchData(!searchData)}
          variant="outlined"
          className="banner__searchButton"
        >
          {searchData ? "Hide" : "Search please"}
        </Button>
      </div>
      <div className="banner__info">
       <h1>Get out and strect your imagination</h1>
       <h4>Plan a different kind of gateway to uncover the hidden gems near you</h4>
       <Button onClick={() => history.push("/search")} variant="outlined">Explore Nearby</Button>

      </div>

    </div>
  );
};

export default Banner;
