/**
 * Created by mr470 on 02.04.2016.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { MenuItem } from './item';
import styles from './menu.scss';

class Menu extends Component{
    static PropTypes = {
        items: PropTypes.array.isRequired,
        setActiveMenu: PropTypes.func.isRequired
    };
    render(){
        const { items, setActiveMenu } = this.props;
        const menuItems = items.map( (item) =>{
            return <MenuItem {...item} setActiveMenu={setActiveMenu} key={item.mid}/>;
        });
        return (
            <div className={styles.base}>
                {menuItems}
            </div>
        );
    }
}

export {
    Menu
}
export * from './item';
export default Menu;
