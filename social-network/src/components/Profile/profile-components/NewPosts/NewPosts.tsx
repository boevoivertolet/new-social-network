import React from 'react';
import styles from './NewPosts.module.css'

export const NewPosts = () => {
    return <div className={styles.newPosts}>
        <div>
            <textarea name="yor news"></textarea>
            <button>send</button>
        </div>
    </div>
}