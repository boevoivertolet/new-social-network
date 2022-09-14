import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return <nav className={styles.nav}>

        <div><NavLink className={ navData =>navData.isActive? styles.active : styles.nav_link} to="/profile" >Profile</NavLink></div>

        <div><NavLink className={ navData =>navData.isActive? styles.active : styles.nav_link} to="/dialogs" >Dialogs</NavLink></div>

        <div><NavLink className={ navData =>navData.isActive? styles.active : styles.nav_link} to="/news" >News</NavLink></div>

        <div><NavLink className={ navData =>navData.isActive? styles.active : styles.nav_link} to="/music" >Music</NavLink></div>

        <div><NavLink className={ navData =>navData.isActive? styles.active : styles.nav_link} to="/settings" >Settings</NavLink></div>

    </nav>
}