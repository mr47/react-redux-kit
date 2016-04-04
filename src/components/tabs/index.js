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

class BaseTabsWrapper extends Component{
    static contextTypes = {
        router: PropTypes.any.isRequired
    };
    static PropTypes = {
        setActiveTab: PropTypes.func.isRequired
    };
    tabItemClick(index, last){
        const { params, tabs, actions, setActiveTab } = this.props;
        setActiveTab(params.menuId, index);
        this.context.router.push({ pathname: `/${params.menuId}/${index}` });
    }
    collapseItemClick(cid){
        //const { toggleCollapse } = this.props.actions;
        //toggleCollapse(cid);
        //this.context.router.push({
        //    query: {
        //        collapse:
        //    }
        //})
    }
    componentWillMount(){
        //const { actions, params } = this.props;
        //actions.setupTabs(params.menuId);
        //actions.setupCollapse(params.tabIndex);
    }
    render(){
        const { params, tabs, collapse, actions } = this.props;
        const TabsHeaders = tabs.map((item)=>{
            return (
                <Tab key={_.uniqueId("tab",item.id)}>
                    {item.name}
                </Tab>
            );
        });

        const TabsContent = tabs.map((item)=>{
            return (
                <TabPanel key={_.uniqueId("panel",item.id)} />
            );
        });
        return (
            <div>
                <Tabs onSelect={this.tabItemClick.bind(this)} selectedIndex={+params.tabIndex || 0}>
                    <TabList>
                        {TabsHeaders}
                    </TabList>
                    {TabsContent}
                </Tabs>
                <Collapse items={collapse} collapseItemClick={this.collapseItemClick.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    ...state
});

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actionCreators, dispatch) });

const TabsWrapper = connect(mapStateToProps, mapDispatchToProps)(BaseTabsWrapper);

export {
    TabsWrapper
}
export default TabsWrapper;
