import React from 'react';
import styles from './MyPosts.module.css'

export const MyPosts = () => {
    return <div className={styles.myPosts}>
        <h3>My posts</h3>
        <div>
            <textarea name="yor news"></textarea>
            <button>send</button>
        </div>
    </div>
}