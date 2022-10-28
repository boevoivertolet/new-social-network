import React from 'react';
import {UsersClassContainerType, UsersMapStateToPropsType,} from '../Types/Types';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from '../Reducers/usersReducer';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Preloader} from '../Preloader/Preloader';
import {getUsers} from '../../api/api';


class UsersClassContainer extends React.Component<UsersClassContainerType> {


    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(this.props.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                setUsers={this.props.setUsers}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                totalCount={this.props.totalCount}
                unfollow={this.props.unfollow}
            />


        </>
    }
}


const mapStateToProps = (state: ReduxStoreType): UsersMapStateToPropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching


    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersClassContainer);


