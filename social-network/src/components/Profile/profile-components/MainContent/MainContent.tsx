import React from 'react';
import styles from './MainContent.module.css'
import {Post} from './main-content-components/Post';


export const MainContent = () => {
    return <div className={styles.mainContent}>
        <Post/>
    </div>
}

