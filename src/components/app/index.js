/**
 * Created by mr470 on 02.04.2016.
 */
"use strict";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { LeftPanel, RightPanel } from '../panels/';

import TabsWrapper from '../tabs';
import Menu from '../menu';

import * as actionCreators from '../../actions';

class BaseApp extends Component{
    static contextTypes = {
        router: PropTypes.any.isRequired
    };
    handleSetActiveMenu(mid){
        const { setActiveMenu, setupTabs, setActiveTabByIndex, setupCollapseByTabIndex } = this.props.actions;
        setActiveMenu(mid);
        setupTabs(mid);
        setActiveTabByIndex({
            index: 0,
            mid
        });
        setupCollapseByTabIndex({
            tabIndex: 0,
            mid: mid
        })
    }
    handleSetActiveTab(index){
        const { activeMenuItem } = this.props;
        const { setActiveTabByIndex } = this.props.actions;
        setActiveTabByIndex({
            index,
            mid: activeMenuItem.mid
        });
    }
    // sync state
    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(nextProps.activeTabItem, this.props.activeTabItem) || !_.isEqual(nextProps.activeMenuItem, this.props.activeMenuItem)) {
            this.context.router.push({
                pathname: `/${nextProps.activeMenuItem.mid}/${nextProps.activeTabItem.id}`,
                //query: {
                //    collapse: nextProps.collapsedItems.join(",")
                //}
            })
        }
    }
    componentWillMount(){
        const { params } = this.props;
        const { setActiveMenu, setupTabs, setActiveTab, setActiveTabByIndex } = this.props.actions;
        setActiveMenu(params.menuId);
        setupTabs(params.menuId);
        console.log('TAB_ID', params);
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

    }
    render(){
        const { menuItems, tabItems, activeTabItem } = this.props;
        return (
            <div className="row">
                <LeftPanel>
                    <Menu items={menuItems} setActiveMenu={this.handleSetActiveMenu.bind(this)}/>
                </LeftPanel>
                <RightPanel>
                    <TabsWrapper items={tabItems} selectedIndex={+activeTabItem.internalIndex} setActiveTab={this.handleSetActiveTab.bind(this)} />
                </RightPanel>
            </div>
        );
    }
    // <TabsWrapper params={params} setActiveTab={this.setupTabComponent.bind(this)} collapsedItems={collapsedItems}/>
}

const mapStateToProps = (state)=>({
    menuItems: state.menuItems,
    tabItems: state.tabItems,
    activeTabItem: state.activeTabItem,
    activeMenuItem: state.activeMenuItem
});
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actionCreators, dispatch) });

const App = connect(mapStateToProps, mapDispatchToProps)(BaseApp);

export { App };
export default App;

export * from './noMatch';
