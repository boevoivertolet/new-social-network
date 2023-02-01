import React from 'react';
import {LoginType} from '../Types/Types';
import styles from './Login.module.css'


export const LoginForm = (props: LoginType) => {
    return <form action="">
        <div>
            <input type="text" placeholder={'login'}/>
        </div>
        <div>
            <input type="text" placeholder={'password'}/>
        </div>
        <div>
            <input type="checkbox"/> remember me
        </div>
        <div>
            <button>login</button>
        </div>
    </form>
}

export const Login = (props: LoginType) => {
    return <div className={styles.login}>
        <h1>Login</h1>
        <LoginForm/>
    </div>

}