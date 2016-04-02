/**
 * Created by mr470 on 02.04.2016.
 */
import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import { Provider } from 'react-redux'
import { history, store } from './stores/store'
import { App, NoMatch } from './components/app'
import { BaseLayout } from './layouts/';

const AppRoutes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={BaseLayout}>
                <IndexRoute component={App} />
                <Route path="/:menu" component={App}>
                    <Route path=":tab" component={App}/>
                </Route>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>
);

export {
    AppRoutes
};
