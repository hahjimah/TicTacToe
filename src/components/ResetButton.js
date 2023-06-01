import React from "react";
import "./ResetButton.css";

const ResetButton = ({ resetBoard }) => {
  return (
    <button className="reset-button" onClick={resetBoard}>
      Reset
    </button>
  );
};

export default ResetButton;
