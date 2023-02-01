import React from 'react';
import {LoginType} from '../Types/Types';
import styles from './Login.module.css'
import {reduxForm} from 'redux-form'


const LoginForm = () => {
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
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = (props: LoginType) => {
    return <div className={styles.login}>
        <h1>Login</h1>
        <LoginReduxForm/>
    </div>

}