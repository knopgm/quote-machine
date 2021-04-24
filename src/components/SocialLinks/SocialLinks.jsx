import React from "react";

import "./style.scss";

export function SocialLinks() {
  return (
    <div className="social-links">
      <a
        title="Tweet this quote!"
        href="https://twitter.com/intent/tweet"
        target="_top"
      >
        <i className="fa fa-twitter"></i>
      </a>

      <a
        title="Post this quote in instagram!"
        href="https://www.instagram.com/"
        target="_top"
      >
        <i className="fab fa-instagram-square"></i>
      </a>
    </div>
  );
}
