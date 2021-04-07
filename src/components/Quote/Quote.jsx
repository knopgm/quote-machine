import React from 'react';

import './style.scss';

export function Quote(props) {
    return (
        <div className="quote-box">
            <div className="quote-text">
                <i className="fa fa-quote-left"></i>
                <span> {props.message}</span>
            </div>

            <div className="quote-author">
                - <span>{props.author}</span>
            </div>
        </div>
    );
};