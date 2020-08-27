import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

const Banner = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
        {showSearch ? "Hide" : "SearchDates"}
        </Button>
      </div>
      <div className="banner__info">
        Get out and stretch your imagination
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you
        </h5>
       
        <Button onClick={() => history.push('./search')} variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
