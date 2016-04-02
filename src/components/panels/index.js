/**
 * Created by mr470 on 02.04.2016.
 */

"use strict";

import React from 'react';
import Menu from '../menu/';

class LeftPanel extends React.Component{
    render() {
        return (
            <div className="column column-25">
                <Menu {...this.props}/>
            </div>
        );
    }
}
class RightPanel extends React.Component{
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



