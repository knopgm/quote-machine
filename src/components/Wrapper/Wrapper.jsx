import React from 'react';

import './style.scss';

export function Wrapper(props) {
    return (
        <div className="wrapper">
            <div className="inner-wrapper">{props.children}</div>
        </div>
    );
};