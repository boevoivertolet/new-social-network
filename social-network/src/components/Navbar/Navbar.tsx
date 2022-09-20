import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {NavbarType} from '../Types/Types';
import {Sidebar} from './Sidebar';

export const Navbar = (props: NavbarType) => {
    return <nav className={styles.nav}>

        <div className={styles.nav_div}><NavLink
            className={navData => navData.isActive ? styles.active : styles.nav_link} to="/profile">Profile</NavLink>
        </div>

        <div className={styles.nav_div}><NavLink
            className={navData => navData.isActive ? styles.active : styles.nav_link} to="/dialogs">Dialogs</NavLink>
        </div>

        <div className={styles.nav_div}><NavLink
            className={navData => navData.isActive ? styles.active : styles.nav_link} to="/news">News</NavLink></div>

        <div className={styles.nav_div}><NavLink
            className={navData => navData.isActive ? styles.active : styles.nav_link} to="/music">Music</NavLink></div>

        <div className={styles.nav_div}><NavLink
            className={navData => navData.isActive ? styles.active : styles.nav_link} to="/settings">Settings</NavLink>
        </div>

        <Sidebar  peoples={props.sidebar.peoples}/>
    </nav>
}

