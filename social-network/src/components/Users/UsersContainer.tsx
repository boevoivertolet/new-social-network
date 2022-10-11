import React from 'react';
import {
    UsersMapDispatchToPropsType,
    UsersMapStateToPropsType,
} from '../Types/Types';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC} from '../Reducers/usersReducer';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import {connect} from 'react-redux';
import Users from './Users';



const mapStateToProps = (state: ReduxStoreType): UsersMapStateToPropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage


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
