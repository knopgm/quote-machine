import React from 'react';

import './style.scss';

export function SocialLinks() {
    return (
        <div className="social-wrapper">
            <a
                className="button"
                title="Tweet this quote!"
                href="https://twitter.com/intent/tweet"
                target="_top"
            >
                <i className="fa fa-twitter"></i>
            </a>

            <a
                className="button"
                title="Post this quote in instagram!"
                target="_top"
            >
                <i className="fab fa-instagram-square"></i>
            </a>
        </div>
    );
};