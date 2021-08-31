import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import "./SearchResults.css";
import { useHistory } from "react-router-dom";

const SearchResults = ({ img, loc, title, description, star, url,price,total }) => {
    const history = useHistory();

  return (
    
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{loc}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
            <Button variant="contained" color="primary" onClick={() => history.push('/search')}>
              <a href={url} className="colortext">Book</a>
            </Button>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
