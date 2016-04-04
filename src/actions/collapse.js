/**
 * Created by mr470 on 03.04.2016.
 */

import { createAction, handleActions, handleAction } from 'redux-actions';
import { SETUP_COLLAPSE, TOGGLE_COLLAPSE, SETUP_COLLAPSED, SETUP_COLLAPSE_BY_TAB_INDEX } from '../reducers';

export const setupCollapse = createAction(SETUP_COLLAPSE);
export const setupCollapseByTabIndex = createAction(SETUP_COLLAPSE_BY_TAB_INDEX);
export const toggleCollapse = createAction(TOGGLE_COLLAPSE);
export const setupCollapsed = createAction(SETUP_COLLAPSED);
