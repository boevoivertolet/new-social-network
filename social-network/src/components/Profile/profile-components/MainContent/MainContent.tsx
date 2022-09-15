import React from 'react';
import styles from './MainContent.module.css'
import {Post} from './main-content-components/Post';
import {MainContentType} from '../../../Types/Types';



export const MainContent = (props: MainContentType) => {

    let posts = props.postData.map(el => <Post postData={el}/>);


    return <div className={styles.mainContent}>
        {posts}
    </div>
}

