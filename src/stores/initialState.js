"use strict";
import dev from './../decorators/dev'

const initialState = {  };

const initialStateManage = ()=> (dev ? window.__initialState__: initialState);

export default initialStateManage();
