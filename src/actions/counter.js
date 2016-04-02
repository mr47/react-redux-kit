/**
 * Created by mr470 on 02.04.2016.
 */

import { createAction, handleActions, handleAction } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../reducers';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);


