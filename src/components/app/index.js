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
    setupComponents(){
        const { actions, params } = this.props;
        let { query } = this.props.location;
        actions.setupTabs(params.menuId);
        actions.setupCollapse(params.tabIndex);
        actions.setupCollapsed(query.collapse);
    }
    componentWillMount(){
        this.setupComponents();
    }
    render(){
        const { menu, actions, params, collapsedItems } = this.props;
        return (
            <div className="row">
                <LeftPanel>
                    <Menu items={menu} setActiveMenu={this.setupComponents.bind(this)}/>
                </LeftPanel>
                <RightPanel>
                    <TabsWrapper params={params} collapsedItems={collapsedItems}/>
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
