/**
 * Created by mr470 on 02.04.2016.
 */
"use strict";

const tabItems = [
    {
        id: 0,
        mid: 1,
        default: true,
        name: "Tab 1 > Menu 1"
    },
    {
        id: 1,
        mid: 1,
        name: "Tab 2 > Menu 1"
    },
    {
        id: 2,
        mid: 2,
        default: true,
        name: "Tab 1 > Menu 2"
    },
    {
        id: 3,
        mid: 2,
        name: "Tab 2 > Menu 2"
    },
    {
        id: 4,
        mid: 2,
        name: "Tab 2 > Menu 2"
    }
];

const defaultTabId = (menuId)=>{
    const defaultTabItem = _.find(tabItems, {
        default: true,
        mid: menuId
    });
    return defaultTabItem.id || 0;
};

export {
    tabItems, defaultTabId
}
