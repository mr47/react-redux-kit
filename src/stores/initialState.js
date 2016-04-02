"use strict";
import dev from './../decorators/dev'

import { menuItems } from '../data/'

const initialState = { };

// Initial state manager
const initialStateManager = ()=> {
    if (dev){
        return {
            ...initialState,
            ...window.__initialState__
        }
    } else {
        return initialState;
    }

};

export default initialStateManager();
