import React from 'react';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return <nav className={styles.nav}>
        <div><a href="src/components/Navbar/Navbar#">Profile</a></div>
        <div><a href="src/components/Navbar/Navbar#">Messages</a></div>
        <div><a href="src/components/Navbar/Navbar#">News</a></div>
        <div><a href="src/components/Navbar/Navbar#">Music</a></div>
        <div><a href="src/components/Navbar/Navbar#">Settings</a></div>
    </nav>
}