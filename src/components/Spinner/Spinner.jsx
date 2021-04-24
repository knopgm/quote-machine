import React from "react";

import "./style.scss";

export function Spinner() {
  return (
    <div className="spinner">
      <div className="fa-3x">
        <i className="fas fa-circle-notch fa-spin"></i>
      </div>
    </div>
  );
}
