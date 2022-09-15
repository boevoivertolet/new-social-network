import React from 'react';
import {DialogsHeaderType} from '../../../Types/Types';
import styles from'./DialogsHeader.module.css'

export const DialogsHeader = (props: DialogsHeaderType) => {
    return <div className={styles.dialogs_header}><h3>{props.title}:</h3></div>
}