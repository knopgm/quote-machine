import React from "react";
import { Header } from "../Header";

import "./style.scss";

export function Wrapper(props) {
  return (
    <div className="wrapper">
      <Header />
      <div className="inner-wrapper">{props.children}</div>
    </div>
  );
}
