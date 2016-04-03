/**
 * Created by mr470 on 02.04.2016.
 */

const menuItems = [
    {
        mid: 1,
        default: true,
        name: "Menu 1"
    },
    {
        mid: 2,
        name: "Menu 2"
    }
];

const defaultMenuId = ()=>{
    const defaultMenuItem = _.find(menuItems, {
        default: true
    });
    return defaultMenuItem.id || 0;
};

export {
    menuItems, defaultMenuId
}
