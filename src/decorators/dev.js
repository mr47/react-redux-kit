"use strict";

const dev = ()=>{
    return process.env.NODE_ENV === "development" && window.devToolsExtension;
};

export default dev();
