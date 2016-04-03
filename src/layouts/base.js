"use strict";

import React from 'react';
import { Link } from 'react-router'

const BaseLayout = ({ children })=>{
    return (
        <div className="container">
            <h1><Link to="/">React + Redux Demo</Link></h1>
           {children}
        </div>
    )
};

export {
    BaseLayout
};
