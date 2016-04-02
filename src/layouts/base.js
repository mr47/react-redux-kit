"use strict";

import React from 'react';

const BaseLayout = ({ children })=>{
    return (
        <div className="container">
            <h1>React + Redux Demo</h1>
           {children}
        </div>
    )
};

export {
    BaseLayout
};
