import React from 'react';
import styles from './Button.module.css'
import {ButtonType} from '../Types/Types';




export const Button = (props: ButtonType) => {
    return <div><button className={styles.button}>{props.title}</button></div>
}