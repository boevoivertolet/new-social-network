import React from 'react';
import styles from './Button.module.css'
import {ButtonType} from '../Types/Types';




export const Button = (props: ButtonType) => {
    return <span className={styles.button}>{props.title}</span>
}