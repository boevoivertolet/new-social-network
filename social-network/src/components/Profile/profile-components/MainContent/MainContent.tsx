import React from 'react';
import styles from './MainContent.module.css'
import {Post} from './main-content-components/Post';
import {MainContentType} from '../../../Types/Types';



export const MainContent = (props: MainContentType) => {

    let post = props.postsData.map(p => <Post key={p.id} likesCounter={props.likesCounter}  postsData={p}/>);


    return <div className={styles.mainContent}>
        {post}
    </div>
}

