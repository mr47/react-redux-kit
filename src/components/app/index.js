/**
 * Created by mr470 on 02.04.2016.
 */
"use strict";
import { bindActionCreators } from 'redux';
import shallowCompare from 'react/lib/shallowCompare';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { LeftPanel, RightPanel } from '../panels/';

import Collapse from '../collapse';
import TabsWrapper from '../tabs';
import Menu from '../menu';

import * as actionCreators from '../../actions';

class BaseApp extends Component{
    static contextTypes = {
        router: PropTypes.any.isRequired
    };
    handleSetActiveMenu(mid){
        //setupTabs(mid);
        //setActiveTabByIndex({
        //    index: 0,
        //    mid
        //});
        //setupCollapseByTabIndex({
        //    index: 0,
        //    mid: mid
        //});
        //setupCollapsed([]);
    }
    handleSetActiveTab(index){
        const { activeMenuItem } = this.props;
        const { setActiveTabByIndex, setupCollapseByTabIndex, setupCollapsed } = this.props.actions;
        //setActiveTabByIndex({
        //    index,
        //    mid: activeMenuItem.id
        //});
        //setupCollapseByTabIndex({
        //    index,
        //    mid: activeMenuItem.id
        //});
        //setupCollapsed([]);
    }
    handleToggleCollapse(cid){
        const { toggleCollapse } = this.props.actions;
        toggleCollapse(cid);
    }
    // "one state sync to rule them all."
    // sync state
    /*componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location){
            const { setActiveMenu, setupTabs, setActiveTab, setActiveTabByIndex, setupCollapse, setupCollapsed, setupCollapseByTabIndex } = this.props.actions;
            if (nextProps.params.menuId){
                setActiveMenu(nextProps.params.menuId);
                setupTabs(nextProps.params.menuId);
                if (nextProps.params.tabId){
                    setActiveTab({
                        tid: nextProps.params.tabId,
                        mid: nextProps.params.menuId
                    });
                    setupCollapse({
                        tid: nextProps.params.tabId,
                        mid: nextProps.params.menuId
                    });
                } else {
                    setupCollapseByTabIndex({
                        index: 0,
                        mid: nextProps.params.menuId
                    });
                    setActiveTabByIndex({
                        index: 0,
                        mid: nextProps.params.menuId
                    });
                    setupCollapsed([]);
                }
                if ( !_.isEqual(nextProps.activeCollapsedItems, this.props.activeCollapsedItems)){
                    if (nextProps.location.query.collapse.length > 0){
                        setupCollapsed(nextProps.location.query.collapse.split("-"));
                    }
                }
            }
        }
        if (!_.isEqual(nextProps.activeTabItem, this.props.activeTabItem)
            || !_.isEqual(nextProps.activeMenuItem, this.props.activeMenuItem)
            || !_.isEqual(nextProps.activeCollapsedItems, this.props.activeCollapsedItems)
        ) {
            let route = {
                pathname: `/${nextProps.activeMenuItem.id}/${nextProps.activeTabItem.id}`
            };
            if (nextProps.activeCollapsedItems && nextProps.activeCollapsedItems.length > 0){
                route.query = {
                    collapse: nextProps.activeCollapsedItems.join("-")
                }
            }
            this.context.router.push(route);
        }
    }*/
    shouldComponentUpdate(nextProps, nextState){
        return shallowCompare(this, nextProps, nextState);
    }
    componentWillReceiveProps(nextProps){
        const { params, menu } = this.props;
        const { setActiveMenu, setActiveMenuByIndex } = this.props.actions;

        if (nextProps.params.menuId !== params.menuId){
            if (nextProps.params.menuId){
                setActiveMenu(nextProps.params.menuId);
            } else {
                setActiveMenuByIndex(0);
                // console.log(this.props.menu.active);
            }
        }
    }
    componentDidUpdate(prevProps, prevState){

        // if (params.menuId){
        //     setActiveMenu(params.menuId);
        // } else {
        //     setActiveMenuByIndex(0);
        // }
    }
    componentWillMount(){
        const { params } = this.props;
        const { setActiveMenu, setActiveMenuByIndex } = this.props.actions;

        if (params.menuId){
            setActiveMenu(params.menuId);
        } else {
            setActiveMenuByIndex(0);
        }
        //setupTabs(params.menuId);
        //if (params.tabId){
        //    setupCollapse({
        //        tid: params.tabId,
        //        mid: params.menuId
        //    });
        //    setActiveTab({
        //        tid: params.tabId,
        //        mid: params.menuId
        //    });
        //} else {
        //    setupCollapseByTabIndex({
        //        index: 0,
        //        mid: params.menuId
        //    });
        //    setActiveTabByIndex({
        //        index: 0,
        //        mid: params.menuId
        //    });
        //}
        //if (location.query.collapse){
        //    setupCollapsed(location.query.collapse.split("-"));
        //}
    }
    render(){
        const { menu, tabItems, collapseItems, activeTabItem, activeCollapsedItems } = this.props;
        return (
            <div className="row">
                <LeftPanel>
                    <Menu items={menu.items} setActiveMenu={this.handleSetActiveMenu.bind(this)}/>
                </LeftPanel>
            </div>
        );
    }
    /*

     <RightPanel>
     <TabsWrapper items={tabItems} selectedIndex={+activeTabItem.internalIndex} setActiveTab={this.handleSetActiveTab.bind(this)} />
     <Collapse items={collapseItems} collapsedItems={activeCollapsedItems} collapseItemClick={this.handleToggleCollapse.bind(this)}/>
     </RightPanel>
     */
}

const mapStateToProps = (state)=>({
    menu: state.menu
    //tabItems: state.tabItems,
    //activeTabItem: state.activeTabItem,
    //activeMenuItem: state.activeMenuItem,
    //collapseItems: state.collapseItems,
    //activeCollapsedItems: state.activeCollapsedItems
});
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actionCreators, dispatch) });

const App = connect(mapStateToProps, mapDispatchToProps)(BaseApp);

export { App };
export default App;

export * from './noMatch';
