import React from 'react';
import styles from './Img.module.css'
import {ImgType} from '../../../../Types/Types';

export const Img = (props: ImgType) => {
    return <div >
        <img className={styles.img}
            src={props.ava}
            alt=" avatar"/>
    </div>
}