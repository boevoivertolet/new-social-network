import styles from './DialogsNames.module.css';
import React from 'react';
import {DialogsNamesType} from '../../../Types/Types';
import {NavLink} from 'react-router-dom';

export const DialogsNames = (props: DialogsNamesType) => {

    let path ='/dialogs/' + props.id

    return <div className={styles.dialogs_names}>
        <div className={styles.dialogs_name}><NavLink to={path}>{props.name}</NavLink></div>
    </div>
}