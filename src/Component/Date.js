import React from "react";
import { useState } from "react";
import "./Date.css";

function Date(props) {
  const [date, setDate] = useState("08-04-2022");

  const handleChange = (e) => {
    const newdate = e.target.value.split("-").reverse();
    const mydate = newdate.join("-");

    setDate(mydate);
  };
  // function predate() {
  //   let today = new Date();
  //   let dd = today.getDate();
  //   let mm = today.getMonth();
  //   let yy = today.getFullYear();

  //   return yy + "-" + mm + "-" + dd;
  // }

  const clickHandler = () => {
    props.CentresData(date);
  };

  return (
    <div className="container">
      <input
        type="date"
        min={props.mindate}
        className="input-date"
        onChange={handleChange}
      />
      <button className="btn btn-outline-success" onClick={clickHandler}>
        Check Availability
      </button>
    </div>
  );
}

export default Date;
