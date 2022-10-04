import React from 'react';
import {ProfileMapDispatchToPropsType, ProfileMapStateToPropsType, StateType} from '../Types/Types';
import {Profile} from './Profile';
import {addPostAC, likesCounterAC, updateNewPostTextAC} from '../Reducers/profilePageReducer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

// export const ProfileContainer = (props: ProfileContainerType) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store: StoreType) => {
//
//                     let ava = store.getState().profilePage.postsData[0].ava
//                     let newPostText = store.getState().profilePage.newPostText
//                     let postsData = store.getState().profilePage.postsData
//
//
//                     const likesCounter = () => {
//                         store.dispatch(likesCounterAC())
//                     }
//
//                     const addPost = () => {
//                         store.dispatch(addPostAC())
//                     }
//                     const updateNewPostText = (text: string) => {
//                         store.dispatch(updateNewPostTextAC(text))
//                     }
//
//                     return <Profile
//                         postsData={postsData}
//                         newPostText={newPostText}
//                         ava={ava}
//
//                         likesCounter={likesCounter}
//                         addPost={addPost}
//                         updateNewPostText={updateNewPostText}
//                     />
//                 }
//
//
//             }
//
//
//         </StoreContext.Consumer>
//     )
//
// }



export const mapStateToProps = (state: StateType): ProfileMapStateToPropsType => {
    return {
        profilePage: state.profilePage

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

