import React from "react";

import "./style.scss";

export function Header({ title, subtitle }) {
  return (
    <div className="header">
      <div className="header__title">{title}</div>
      <p className="header__subtitle">{subtitle}</p>
    </div>
  );
}
