import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Button from "@material-ui/core/Button";
//import PeopleIcon from "@material-ui/icons/People";
import GroupIcon from '@material-ui/icons/Group';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Search.css"
const Seach = () => {
    const[startDate, setStartDate]=useState(new Date());
    const[endDate, setEndDate]=useState(new Date());
    const history = useHistory();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.startDate);
  };
 

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        No of Guests <GroupIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button onClick={() => history.push("/search")}>Search Airnb</Button>
    </div>
  );
};

export default Seach;
