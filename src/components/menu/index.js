/**
 * Created by mr470 on 02.04.2016.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import styles from './menu.scss';

class MenuItem extends Component{
    setupTabsClick(menuId){
        return ()=>{
            this.props.setupTabs(menuId);
        }
    }
    render(){
        const { mid, name, params } = this.props;
        return (
            <Link className={`${styles.item}`} to={`/${mid}/`} onClick={this.setupTabsClick(mid)} activeClassName={styles.itemActive}>{name}</Link>
        );
    }
}

class Menu extends Component{
    static PropTypes = {
        items: PropTypes.array.isRequired
    };
    render(){
        const { items, actions } = this.props;
        const menuItems = items.map( (item) =>{
            return <MenuItem {...item} setupTabs={ actions.setupTabs} key={item.mid}/>;
        });
        return (
            <div className={styles.base}>
                {menuItems}
            </div>
        );
    }
}

export {
    Menu, MenuItem
}
export default Menu;
