import React from "react";

import "./style.scss";

export function Footer() {
  return (
    <div className="footer">
      <span className="footer__author"> - by Gab - </span>
      <div className="footer__links">
        <a
          className="footer__links__item"
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className="footer__links__item"
          href="https://github.com/knopgm"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}
