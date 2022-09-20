import React, {ChangeEvent} from 'react';
import styles from './UniversalTextarea.module.css'

export const UniversalTextarea = () => {

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
      let text = e.currentTarget.value
        alert(text)
    }

    return <textarea className={styles.textarea} onChange={onChangeHandler}></textarea>
}