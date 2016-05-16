"use strict";

import 'chai';
/* Menu */
import { menu } from './../../src/reducers';
import { dataMenuItems } from './../../src/data/menu'
import { setActiveMenu, setActiveMenuByIndex, setMenuItems } from './../../src/actions/';

/* Tabs */
import { tabItems, activeTabItem } from './../../src/reducers';
import { dataTabItems } from './../../src/data/'
import { setActiveTab, setActiveTabByIndex } from './../../src/actions/';

/* Collapse */
import { collapseItems, activeCollapsedItems } from './../../src/reducers';
import { dataCollapseItems } from './../../src/data/'
import { setupCollapse, setupCollapsed, setupCollapseByTabIndex, toggleCollapse } from './../../src/actions/';


describe("React + Redux Demo", ()=>{

    describe("Menu",()=>{
        it("should setup menu items", ()=>{
            let newMenuItems = [...dataMenuItems, {
                id: 3,
                name: "Menu 3"
            }];
            let reducer = menu(undefined, setMenuItems({
                items: newMenuItems
            }));
            expect(reducer.items).to.be.deep.equal(newMenuItems);
        });
        it("should set active menu by id", ()=>{
            let reducer = menu(undefined, setActiveMenu(1));
            expect(reducer.active).to.be.deep.equal({
                id: 1,
                name: "Menu 1"
            });
        });
        it("should get menu items", ()=>{
            let reducer = menu(undefined, {});
            expect(reducer.active).to.be.equal(false);
            expect(reducer.items).to.be.deep.equal(dataMenuItems);
        });
        it("should set active menu by id", ()=>{
            let reducer = menu(undefined, setActiveMenu(1));
            expect(reducer.active).to.be.deep.equal({
                id: 1,
                name: "Menu 1"
            });
        });
        it("should set active menu by index", ()=>{
            let reducer = menu(undefined, setActiveMenuByIndex(1));
            expect(reducer.active).to.be.deep.equal({
                id: 2,
                name: "Menu 2"
            });
        });
        it("Get active menu by id 999 should get false", ()=>{
            let reducer = menu(undefined, setActiveMenu(999));
            expect(reducer.active).to.be.deep.equal({
                id: 1,
                name: "Menu 1"
            });
        });
        it("Get active menu by index 999 should get false", ()=>{
            let reducer = menu(undefined, setActiveMenuByIndex(999));
            expect(reducer.active).to.be.deep.equal(false);
        });
    });

    //describe("Tabs",()=>{
    //    it("should get tab items", ()=>{
    //        let reducer = tabItems(undefined, {});
    //        expect(reducer).to.be.deep.equal(dataTabItems);
    //    });
    //    it("should set active tab using menu id 1", ()=>{
    //        let reducer = activeTabItem(undefined, {});
    //        expect(reducer).to.contain.all.keys({
    //            id: 0,
    //            mid: 1,
    //            name: "Tab 1 > Menu 1"
    //        });
    //        reducer = activeTabItem(undefined, setActiveTab({
    //            mid: 1,
    //            tid: 0
    //        }));
    //        expect(reducer).to.contain.all.keys({
    //            id: 0,
    //            mid: 1,
    //            name: "Tab 1 > Menu 1"
    //        });
    //    });
    //    it("should set active tab using unknown menu id", ()=>{
    //        let reducer = activeTabItem(undefined, setActiveTab({
    //            mid: 999,
    //            tid: 999
    //        }));
    //        expect(reducer).to.contain.all.keys({
    //            internalIndex: -1
    //        });
    //    });
    //    it("should set active tab by index", ()=>{
    //        let reducer = activeTabItem(undefined, setActiveTabByIndex({
    //            index: 0,
    //            mid: 1
    //        }));
    //        expect(reducer).to.contain.all.keys({
    //            id: 1,
    //            mid: 1,
    //            name: "Tab 2 > Menu 1"
    //        });
    //    });
    //    it("should set active tab by unknown index", ()=>{
    //        let reducer = activeTabItem(undefined, setActiveTabByIndex({
    //            index: 999,
    //            mid: -1
    //        }));
    //        expect(reducer).to.equal(false);
    //    })
    //});
    //
    //describe("Collapse",()=>{
    //    const activeMenuId = 1;
    //    const activeTabId = 0;
    //    it("should get collapse items", ()=>{
    //        let reducer = collapseItems(undefined, {});
    //        expect(reducer).to.be.deep.equal(dataCollapseItems);
    //    });
    //
    //    it("should set active collapse items", ()=>{
    //        let resultState = ["1"];
    //        let resultStateTwo = ["1", "2"];
    //        let reducer = activeCollapsedItems(undefined, toggleCollapse("1"));
    //        expect(reducer).to.be.deep.equal(resultState);
    //        reducer = activeCollapsedItems(resultState, toggleCollapse("2"));
    //        expect(reducer).to.be.deep.equal(resultStateTwo);
    //    });
    //    it("should setup collapse items", ()=>{
    //        let reducer = collapseItems(undefined, setupCollapse({
    //            tid: activeTabId,
    //            mid: activeMenuId
    //        }));
    //        expect(reducer).to.have.length(3);
    //    });
    //    it("should setup collapse items with unknown menuId", ()=>{
    //        let reducer = collapseItems(undefined, setupCollapse({
    //            tid: activeTabId,
    //            mid: 999
    //        }));
    //        expect(reducer).to.have.length(0);
    //    });
    //});

});
