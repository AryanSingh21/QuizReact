import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="progressBarCont">
      <div className="progress">
        <div
          className={`progress-bar progress-bar ${props.bg}`}
          role="progressbar"
          style={{ width: `${props.line}%` }}
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <h5>{props.value}/4</h5>
    </div>
  );
};

export default ProgressBar;
