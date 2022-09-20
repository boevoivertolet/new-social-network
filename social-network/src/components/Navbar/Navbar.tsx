import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
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

        <div className={styles.sidebar}>
            <div className={styles.sidebar_header}>
                <h4>Friends: </h4>
            </div>
            <div className={styles.sidebar_names}>
                <div className={styles.sidebar_name}><img className={styles.sidebar_name_img} src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"/>Name1</div>
                <div className={styles.sidebar_name}><img  className={styles.sidebar_name_img}src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"/>Name2</div>
                <div className={styles.sidebar_name}><img className={styles.sidebar_name_img} src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"/>Name3</div>
            </div>
        </div>


    </nav>
}