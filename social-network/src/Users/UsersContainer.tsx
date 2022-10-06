import React from 'react';
import {Users} from './Users';
import {
    UsersMapDispatchToPropsType,
    UsersMapStateToPropsType,
} from '../components/Types/Types';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC} from '../components/Reducers/usersReducer';
import {ReduxStoreType} from '../components/ReduxStore/ReduxStore';
import {connect} from 'react-redux';


const mapStateToProps = (state: ReduxStoreType): UsersMapStateToPropsType => {
    return {
        users: state.users.users


    }
}
const mapDispatchToProps = (dispatch: Dispatch): UsersMapDispatchToPropsType => {
    return {
        follow: (usersId: string) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId: string) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }


}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
