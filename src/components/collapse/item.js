/**
 * Created by mr470 on 03.04.2016.
 */

import React, { Component, PropTypes } from 'react';
import styles from './collapse.scss';

class CollapseItem extends Component{
    static PropTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        collapsed: PropTypes.bool,
        collapseItemClick: PropTypes.func.isRequired
    };
    onItemClick(e){
        e.preventDefault();
        this.props.collapseItemClick(this.props.id);
    }
    render(){
        const { id, name, text, collapsed } = this.props;
        return (
            <div className={collapsed?styles.itemCollapsed:styles.item}>
                <div  className={styles.header}>
                    <a href="#" onClick={this.onItemClick.bind(this)}>{name}</a>
                </div>
                <div className={styles.body}>
                    {text}
                </div>
            </div>
        );
    }
}

export {
    CollapseItem
}
