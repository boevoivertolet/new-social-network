import React from 'react';
import styles from './MainContent.module.css'

export const MainContent = () => {
    return <div className={styles.mainContent}>
        <div className="new-post">---New post---</div>
        <div className="post">---post1---</div>
        <div className="post">---post2---</div>
        <div className="post">---post3---</div>
    </div>
}