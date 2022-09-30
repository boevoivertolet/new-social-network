import React from 'react';
import {MainContentContainerType} from '../../../Types/Types';
import {MainContent} from './MainContent';
import {likesCounterAC} from '../../../Reducers/profilePageReducer';

export const MainContentContainer = (props: MainContentContainerType) => {

    let postsData = props.store.getState().profilePage.postsData

    const likesCounter = () => {
        props.store.dispatch(likesCounterAC())
    }


    return <MainContent postsData={postsData} likesCounter={likesCounter}/>
}

