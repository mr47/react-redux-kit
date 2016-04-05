/**
 * Created by mr470 on 02.04.2016.
 */
"use strict";
import { bindActionCreators } from 'redux';
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
        const { setActiveMenu, setupTabs, setActiveTabByIndex, setupCollapseByTabIndex, setupCollapsed } = this.props.actions;
        setActiveMenu(mid);
        setupTabs(mid);
        setActiveTabByIndex({
            index: 0,
            mid
        });
        setupCollapseByTabIndex({
            index: 0,
            mid: mid
        });
        setupCollapsed([]);
    }
    handleSetActiveTab(index){
        const { activeMenuItem } = this.props;
        const { setActiveTabByIndex, setupCollapseByTabIndex, setupCollapsed } = this.props.actions;
        setActiveTabByIndex({
            index,
            mid: activeMenuItem.id
        });
        setupCollapseByTabIndex({
            index,
            mid: activeMenuItem.id
        });
        setupCollapsed([]);
    }
    handleToggleCollapse(cid){
        const { toggleCollapse } = this.props.actions;
        toggleCollapse(cid);
    }
    // "one state sync to rule them all."s
    // sync state
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location){
            const { setActiveMenu, setupTabs, setActiveTab, setActiveTabByIndex, setupCollapse, setupCollapsed } = this.props.actions;
            console.log('change location!!!');
            if (nextProps.params.menuId){
                setActiveMenu(nextProps.params.menuId);
                setupTabs(nextProps.params.menuId);
                setupCollapse({
                    tid: nextProps.params.tabId,
                    mid: nextProps.params.menuId
                });
                if (nextProps.params.tabId){
                    setActiveTab({
                        tid: nextProps.params.tabId,
                        mid: nextProps.params.menuId
                    });
                } else {
                    setActiveTabByIndex({
                        index: 0,
                        mid: nextProps.params.menuId
                    });
                }
                if (nextProps.location.query.collapse.length > 0){
                    setupCollapsed(nextProps.location.query.collapse.split("-"));
                }
            }
        }
        if (!_.isEqual(nextProps.activeTabItem, this.props.activeTabItem)
            || !_.isEqual(nextProps.activeMenuItem, this.props.activeMenuItem)
            || !_.isEqual(nextProps.activeCollapsedItems, this.props.activeCollapsedItems)
        ) {
            console.log(nextProps.activeCollapsedItems);
            this.context.router.push({
                pathname: `/${nextProps.activeMenuItem.id}/${nextProps.activeTabItem.id}`,
                query: {
                    collapse: nextProps.activeCollapsedItems? nextProps.activeCollapsedItems.join("-"): null
                }
            })
        }
    }
    componentWillMount(){
        const { params, location } = this.props;
        const { setActiveMenu, setupTabs, setActiveTab, setActiveTabByIndex, setupCollapse, setupCollapsed } = this.props.actions;
        if (params.menuId){
            setActiveMenu(params.menuId);
            setupTabs(params.menuId);
            setupCollapse({
                tid: params.tabId,
                mid: params.menuId
            });
            if (params.tabId){
                setActiveTab({
                    tid: params.tabId,
                    mid: params.menuId
                });
            } else {
                setActiveTabByIndex({
                    index: 0,
                    mid: params.menuId
                });
            }
            if (location.query.collapse.length > 0){
                setupCollapsed(location.query.collapse.split("-"));
            }
        }
    }
    render(){
        const { menuItems, tabItems, collapseItems, activeTabItem, activeCollapsedItems } = this.props;
        return (
            <div className="row">
                <LeftPanel>
                    <Menu items={menuItems} setActiveMenu={this.handleSetActiveMenu.bind(this)}/>
                </LeftPanel>
                <RightPanel>
                    <TabsWrapper items={tabItems} selectedIndex={+activeTabItem.internalIndex} setActiveTab={this.handleSetActiveTab.bind(this)} />
                    <Collapse items={collapseItems} collapsedItems={activeCollapsedItems} collapseItemClick={this.handleToggleCollapse.bind(this)}/>
                </RightPanel>
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    menuItems: state.menuItems,
    tabItems: state.tabItems,
    activeTabItem: state.activeTabItem,
    activeMenuItem: state.activeMenuItem,
    collapseItems: state.collapseItems,
    activeCollapsedItems: state.activeCollapsedItems
});
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actionCreators, dispatch) });

const App = connect(mapStateToProps, mapDispatchToProps)(BaseApp);

export { App };
export default App;

export * from './noMatch';
