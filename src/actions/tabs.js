/**
 * Created by mr470 on 02.04.2016.
 */

import { createAction, handleActions, handleAction } from 'redux-actions';
import { SETUP_TABS, SET_ACTIVE_TAB, SET_ACTIVE_TAB_BY_INDEX, SETUP_TABS_BY_MENU_INDEX } from '../reducers';

export const setupTabs = createAction(SETUP_TABS);
export const setupTabsByMenuIndex = createAction(SETUP_TABS_BY_MENU_INDEX);
export const setActiveTab = createAction(SET_ACTIVE_TAB);
export const setActiveTabByIndex = createAction(SET_ACTIVE_TAB_BY_INDEX);

