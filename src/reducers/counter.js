"use strict";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const counter = (state = 0, action)=>{
    switch (action.type){
        case INCREMENT: {
            return state + 1;
        } break;
        case DECREMENT: {
            return state - 1;
        } break;
        default:
            return state;
    }
};

export {
    counter
}

export default counter;
