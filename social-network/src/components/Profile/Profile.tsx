import React from 'react';
import {WallImg} from './profile-components/WallImg/WallImg';
import {AvatarDescription} from './profile-components/AvatarDescription/AvatarDescription';
import {NewPosts} from './profile-components/NewPosts/NewPosts';
import {MainContent} from './profile-components/MainContent/MainContent';
import styles from './Profile.module.css'
import {PostsHeader} from './profile-components/PostsHeader/PostsHeader';
import {ProfileType} from '../Types/Types';

export const Profile = (props: ProfileType) => {
    return <div className={styles.profile}>
        <WallImg/>
        <AvatarDescription ava={props.postsData[0].ava}/>
        <PostsHeader/>
        <NewPosts newPostText={props.newPostText}  updateNewPostText={props.updateNewPostText}  addPost={props.addPost} />
        <MainContent likesCounter={props.likesCounter}  postsData={props.postsData}/>
    </div>



}
