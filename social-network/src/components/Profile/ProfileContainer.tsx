import React from 'react';
import {ProfileMapDispatchToPropsType, ProfileMapStateToPropsType, StateType} from '../Types/Types';
import {Profile} from './Profile';
import {addPostAC, likesCounterAC, updateNewPostTextAC} from '../Reducers/profilePageReducer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {avatars} from '../Avatars/Avatars';




export const mapStateToProps = (state: StateType): ProfileMapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        ava: avatars[3].link
    }
}
export const mapDispatchToProps = (dispatch: Dispatch): ProfileMapDispatchToPropsType => {
    return {
        likesCounter: () => {
            dispatch(likesCounterAC())
        },
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }

}


export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

