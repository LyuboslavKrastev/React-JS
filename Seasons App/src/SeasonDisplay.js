import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: { text: "Lets hit the beach", iconName: "sun icon" },
  winter: { text: "Burr, it's chilly", iconName: "snowflake icon" }
};


const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  const iconSize = "massive";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconSize} ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconSize} ${iconName}`} />
    </div>
  );
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }
  return lat > 0 ? "winter" : "summer";
};

export default SeasonDisplay;
