import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {HeaderType} from '../Types/Types';

export const Header = (props: HeaderType) => {
    return <header className={styles.header}><img
        src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
        alt="logo"/>
    <div className={styles.loginBlock}>
        { props.isAuth ? props.data.login : <NavLink to='/login'>Login</NavLink>}
    </div>


    </header>
}