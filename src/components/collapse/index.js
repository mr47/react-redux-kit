/**
 * Created by mr470 on 03.04.2016.
 */

import React, { Component, PropTypes } from 'react';
import { CollapseItem } from './item';
import styles from './collapse.scss';

class Collapse extends Component{
    static PropTypes = {
        items: PropTypes.array.isRequired,
        collapseItemClick: PropTypes.func.isRequired
    };
    render(){
        const { items, toggleCollapse, collapseItemClick } = this.props;
        const menuItems = items.map( (item) =>{
            return <CollapseItem {...item} collapseItemClick={collapseItemClick} key={item.cid}/>;
        });
        return (
            <div className={styles.base}>
                {menuItems}
            </div>
        );
    }
}

export * from './item';

export {
    Collapse
}

export default Collapse;
