import React, {ChangeEvent, useState} from 'react';
import styles from './UniversalTextarea.module.css'
import {UniversalTextareaType} from '../Types/Types';

export const UniversalTextarea = (props: UniversalTextareaType) => {




    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(event.currentTarget.value)


    }


    return <textarea value={props.newPostText} className={styles.textarea} onChange={onChangeHandler}></textarea>
}