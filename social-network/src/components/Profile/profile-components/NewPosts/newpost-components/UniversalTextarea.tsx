import React, {ChangeEvent, useState} from 'react';
import styles from './UniversalTextarea.module.css'

export const UniversalTextarea = () => {
    let [postMessage, setPostMessage] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
      let text = e.currentTarget.value
        setPostMessage(text);

    }

    return <textarea className={styles.textarea} onChange={onChangeHandler}></textarea>
}