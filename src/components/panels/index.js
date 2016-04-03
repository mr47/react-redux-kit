/**
 * Created by mr470 on 02.04.2016.
 */

"use strict";

import React, { Component } from 'react';


class LeftPanel extends Component{
    render() {
        const { children } = this.props;
        return (
            <div className="column column-25">
                {children}
            </div>
        );
    }
}
class RightPanel extends Component{
    render() {
        const { children } = this.props;
        return (
            <div className="column column-75">
                {children}
            </div>
        );
    }
}

export {
    RightPanel, LeftPanel
}



