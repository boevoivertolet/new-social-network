import React from 'react';
import styles from './Button.module.css'
import {ButtonType} from '../Types/Types';


export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }



    return <button disabled={props.disabled} className={styles.button} onClick={onClickHandler}>{props.title}</button>
}