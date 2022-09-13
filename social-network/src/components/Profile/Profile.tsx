import React from 'react';
import {WallImg} from './profile-components/WallImg/WallImg';
import {AvatarDescription} from './profile-components/AvatarDescription/AvatarDescription';
import {MyPosts} from './profile-components/MyPosts/MyPosts';
import {MainContent} from './profile-components/MainContent/MainContent';
import styles from './Profile.module.css'

export const Profile = () => {
    return <div className={styles.content}>
        <WallImg/>
        <AvatarDescription/>
        <MyPosts/>
        <MainContent/>
    </div>

}
