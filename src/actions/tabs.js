/**
 * Created by mr470 on 02.04.2016.
 */

import { createAction, handleActions, handleAction } from 'redux-actions';
import { SETUP_TABS, SET_ACTIVE_TAB, SET_ACTIVE_TAB_BY_INDEX } from '../reducers';

export const setupTabs = createAction(SETUP_TABS);
export const setActiveTab = createAction(SET_ACTIVE_TAB);
export const setActiveTabByIndex = createAction(SET_ACTIVE_TAB_BY_INDEX);

