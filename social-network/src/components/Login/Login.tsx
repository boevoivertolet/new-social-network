import React from 'react';
import {LoginType} from '../Types/Types';
import styles from './Login.module.css'


export const Login = (props: LoginType) => {
    return (
        <div className={styles.login}>
            <h1>Login</h1>
        </div>
    )
}