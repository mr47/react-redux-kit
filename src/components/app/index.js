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
    setupMenuComponent(mid){
        const { actions } = this.props;
        actions.setupTabs(mid);
        actions.setupCollapse({
            tid: 0,
            mid: mid
        });
        //actions.setupCollapsed(query.collapse);
    }
    setupTabComponent(mid, tid){
        const { actions } = this.props;
        console.log("setupTabComponent",arguments);
        actions.setupCollapse({
            tid: tid,
            mid: mid
        });
    }
    componentWillMount(){
        const { params } = this.props;
        this.setupMenuComponent(params.menuId);
        this.setupTabComponent(params.menuId, params.tabIndex || 0);
    }
    render(){
        const { menu, actions, params, collapsedItems } = this.props;
        return (
            <div className="row">
                <LeftPanel>
                    <Menu items={menu} setActiveMenu={this.setupMenuComponent.bind(this)}/>
                </LeftPanel>
                <RightPanel>
                    <TabsWrapper params={params} setActiveTab={this.setupTabComponent.bind(this)} collapsedItems={collapsedItems}/>
                </RightPanel>
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    ...state
});
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actionCreators, dispatch) });

const App = connect(mapStateToProps, mapDispatchToProps)(BaseApp);

export { App };
export default App;

export * from './noMatch';
