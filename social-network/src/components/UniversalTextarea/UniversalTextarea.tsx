import React, {ChangeEvent, useState} from 'react';
import styles from './UniversalTextarea.module.css'
import {UniversalTextareaType} from '../Types/Types';

export const UniversalTextarea = (props: UniversalTextareaType) => {


    return <textarea placeholder={'Enter your message'} value={props.newText} className={styles.textarea} onChange={props.onChangeHandler}></textarea>
}