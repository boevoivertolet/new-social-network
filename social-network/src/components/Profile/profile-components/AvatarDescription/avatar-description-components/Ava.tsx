import React from 'react';
import styles from './Img.module.css'
import {ImgType} from '../../../../Types/Types';
import {ProfileStatus} from '../ProfileStatus';

export const Ava = (props: ImgType) => {
    return <div>
        <img className={styles.img}
            src={props.ava}
            alt=" avatar"/>
    </div>
}