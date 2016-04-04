/**
 * Created by mr470 on 02.04.2016.
 */
"use strict";

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import styles from './tabs.scss';

import * as actionCreators from '../../actions';


import Collapse from '../collapse';

class TabsWrapper extends Component{
    static PropTypes = {
        items: PropTypes.array.isRequired,
        selectedIndex: PropTypes.number.isRequired,
        setActiveTab: PropTypes.func.isRequired
    };
    render(){
        const { items, selectedIndex, setActiveTab } = this.props;
        const TabsHeaders = items.map((item)=>{
            return (
                <Tab key={`tab-${item.id}`}>
                    {item.name}
                </Tab>
            );
        });

        const TabsContent = items.map((item)=>{
            return (
                <TabPanel key={`panel-${item.id}`} />
            );
        });
        //selectedIndex={selectedIndex || 0}
        return (
            <div>
                <Tabs onSelect={setActiveTab} selectedIndex={selectedIndex || 0}>
                    <TabList>
                        {TabsHeaders}
                    </TabList>
                    {TabsContent}
                </Tabs>
            </div>
        );
        // <Collapse items={collapse} collapseItemClick={this.collapseItemClick.bind(this)}/>
    }
}

export {
    TabsWrapper
}
export default TabsWrapper;
