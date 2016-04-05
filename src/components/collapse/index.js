/**
 * Created by mr470 on 03.04.2016.
 */

import React, { Component, PropTypes } from 'react';
import { CollapseItem } from './item';
import styles from './collapse.scss';

class Collapse extends Component{
    static PropTypes = {
        items: PropTypes.array.isRequired,
        collapsedItems: PropTypes.array.isRequired,
        collapseItemClick: PropTypes.func.isRequired
    };
    inCollapsed(collapsedItems, id){
        if (collapsedItems && collapsedItems.length > 0){
            return collapsedItems.indexOf(id.toString()) >= 0;
        } else return false;
    }
    render(){
        const { items, collapseItemClick, collapsedItems } = this.props;
        console.log('collapsedItems', collapsedItems);
        const collapseItems = items.map( (item) =>{
            console.log('collapsedItems:', item.id, this.inCollapsed(collapsedItems, item.id));
            return <CollapseItem {...item} collapsed={this.inCollapsed(collapsedItems, item.id)} collapseItemClick={collapseItemClick} key={item.id}/>;
        });
        return (
            <div className={styles.base}>
                {collapseItems}
            </div>
        );
    }
}

export * from './item';

export {
    Collapse
}

export default Collapse;
