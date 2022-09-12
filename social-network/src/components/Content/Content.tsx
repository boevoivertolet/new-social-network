import React from 'react';
import {WallImg} from './content-components/WallImg/WallImg';
import {AvatarDescription} from './content-components/AvatarDescription/AvatarDescription';
import {MyPosts} from './content-components/MyPosts/MyPosts';
import {MainContent} from './content-components/MainContent/MainContent';
import styles from './Content.module.css'

export const Content = () => {
    return <div className={styles.content}>
        <WallImg/>
        <AvatarDescription/>
        <MyPosts/>
        <MainContent/>
    </div>

}
