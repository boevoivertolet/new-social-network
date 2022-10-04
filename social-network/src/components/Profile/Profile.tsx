import React from 'react';
import {WallImg} from './profile-components/WallImg/WallImg';
import {AvatarDescription} from './profile-components/AvatarDescription/AvatarDescription';
import styles from './Profile.module.css'
import {PostsHeader} from './profile-components/PostsHeader/PostsHeader';
import {ProfileType} from '../Types/Types';
import {NewPosts} from './profile-components/NewPosts/NewPosts';
import {MainContent} from './profile-components/MainContent/MainContent';

export const Profile = (props: ProfileType) => {

    return <div className={styles.profile}>
        <WallImg/>
        <AvatarDescription ava={props.profilePage.postsData[3].ava}/>
        <PostsHeader/>
        <NewPosts updateNewPost={props.updateNewPostText}  addPost={props.addPost} newPostText={props.profilePage.newPostText} />
        <MainContent postsData={props.profilePage.postsData} likesCounter={props.likesCounter}/>
    </div>


}
