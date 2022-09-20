import React from 'react';
import styles from './Button.module.css'
import {ButtonType} from '../Types/Types';




export const Button = (props: ButtonType) => {

    const onClickHAndler = ()=> {alert(props.title)}


    return <span className={styles.button} onClick={onClickHAndler}>{props.title}</span>
}