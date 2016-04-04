/**
 * Created by mr470 on 04.04.2016.
 */

import { createAction, handleActions, handleAction } from 'redux-actions';
import { SET_ACTIVE_MENU } from '../reducers';

export const setActiveMenu = createAction(SET_ACTIVE_MENU);
