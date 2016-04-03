/**
 * Created by mr470 on 03.04.2016.
 */

import React, { Component, PropTypes } from 'react';
import styles from './collapse.scss';

class CollapseItem extends Component{
    static PropTypes = {
        name: PropTypes.string.isRequired,
        cid: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        collapsed: PropTypes.bool,
        collapseItemClick: PropTypes.func.isRequired
    };
    state = {
        isCollapsed: this.props.collapsed && !!this.props.collapsed
    };
    onItemClick(e){
        e.preventDefault();
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
        this.props.collapseItemClick(this.props.cid);
    }
    render(){
        const { cid, name, text } = this.props;
        const { isCollapsed } = this.state;
        return (
            <div className={isCollapsed?styles.itemCollapsed:styles.item}>
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
