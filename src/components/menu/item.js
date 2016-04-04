/**
 * Created by mr470 on 04.04.2016.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import styles from './menu.scss';

class MenuItem extends Component{
    static PropTypes = {
        mid: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        setActiveMenu: PropTypes.func.isRequired
    };
    onItemClick(e){
        this.props.setActiveMenu(this.props.mid);
    }
    render(){
        const { mid, name } = this.props;
        return (
            // Left it as is, it's have place in redux work but better to sync state with url at high level
            // and if someone reading this its HAVE PLACE IN REDUX
            // see https://github.com/reactjs/redux/tree/master/examples/real-world
            <Link className={`${styles.item}`} to={`/${mid}/`} onClick={this.onItemClick.bind(this)} activeClassName={styles.itemActive}>{name}</Link>
        );
    }
}

export {
    MenuItem
}
export default MenuItem;
