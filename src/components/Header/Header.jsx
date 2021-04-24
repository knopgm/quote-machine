import React from "react";

import "./style.scss";

export function Header({ title }) {
  return (
    <>
      <div className="title">{title}</div>
      <p className="subtitle"> - To be inspired...</p>
    </>
  );
}
