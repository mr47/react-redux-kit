/**
 * Created by mr470 on 04.04.2016.
 */

import { createAction, handleActions, handleAction } from 'redux-actions';
import { SET_ACTIVE_MENU, SET_ACTIVE_MENU_BY_INDEX, SET_MENU_ITEMS } from '../reducers';

export const setActiveMenu = createAction(SET_ACTIVE_MENU);
export const setActiveMenuByIndex = createAction(SET_ACTIVE_MENU_BY_INDEX);
export const setMenuItems = createAction(SET_MENU_ITEMS);
