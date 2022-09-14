import React from 'react';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return <nav className={styles.nav}>
        <div><a href="/profile">Profile</a></div>
        <div><a href="/dialogs">Dialogs</a></div>
        <div><a href="/news">News</a></div>
        <div><a href="/music">Music</a></div>
        <div><a href="/settings">Settings</a></div>
    </nav>
}