"use strict";

import 'chai';
import { menuItems, activeMenuItem } from './../../src/reducers/menu';
import { dataMenuItems } from './../../src/data/menu'
import { setActiveMenu, setActiveMenuByIndex } from './../../src/actions/menu';

describe("Basic reducer test", ()=>{

    it("should get menu items", ()=>{
        let reducer = menuItems(undefined, {});
        expect(reducer).to.be.deep.equal(dataMenuItems);
    });
    it("should set active menu item", ()=>{
        let reducer = activeMenuItem(undefined, {});
        expect(reducer).to.be.equal(false);
        reducer = activeMenuItem(undefined, setActiveMenu(1));
        expect(reducer).to.be.deep.equal({
            id: 1,
            name: "Menu 1"
        });
    });
});
