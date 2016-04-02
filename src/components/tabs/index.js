/**
 * Created by mr470 on 02.04.2016.
 */
"use strict";

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from './tabs.scss';

class BaseTabsWrapper extends Component{
    render(){
        const { params } = this.props;
        console.log('tabs', params);
        return null;
    }
}

const mapStateToProps = (state)=>({
    ...state
});

const TabsWrapper = connect(mapStateToProps)(BaseTabsWrapper);

export {
    TabsWrapper
}
export default TabsWrapper;
