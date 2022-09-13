import React from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';

export const NewPosts = () => {
    return <div className={styles.newPosts}>
        <div>
            <textarea name="yor news"></textarea>
            <Button title={'send'}/>
        </div>
    </div>
}