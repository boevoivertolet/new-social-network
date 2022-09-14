import styles from './DialogsNames.module.css';
import React from 'react';
import {DialogsNamesType} from '../../../Types/Types';

export const DialogsNames = (props: DialogsNamesType) => {
    return <div className={styles.dialogs_names}>Dialogs:
        <div><a href="#">Name1</a></div>
        <div><a href="#">Name2</a></div>
    </div>
}