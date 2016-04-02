/**
 * Created by mr470 on 02.04.2016.
 */
"use strict";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { LeftPanel, RightPanel } from '../panels/';
import TabsWrapper from '../tabs/';
import * as actions from '../../actions';
class BaseApp extends Component{
    render(){
        const { menu, actions } = this.props;
        return (
            <div className="row">
                <LeftPanel items={menu} actions={actions}/>
                <RightPanel>
                    <TabsWrapper {...this.props}/>
                </RightPanel>
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    ...state
});
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

const App = connect(mapStateToProps, mapDispatchToProps)(BaseApp);

export { App };
export default App;

export * from './noMatch';
