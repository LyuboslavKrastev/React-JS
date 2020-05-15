import React from "react";

const Loader = props => {
  const size = "massive";
  return (
    <div className="ui active dimmer">
      <div className={`${size} ui text loader`}>{props.message}</div>
    </div>
  );
};

Loader.defaultProps = {
    message: 'Loading'
}

export default Loader;
