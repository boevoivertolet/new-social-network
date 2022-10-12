import {UsersClassContainerType} from '../Types/Types';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';


class UsersClassContainer extends React.Component<UsersClassContainerType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            setUsers={this.props.setUsers}
            currentPage={this.props.currentPage}
            pageSize={this.props.currentPage}
            follow={this.props.follow}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
            totalUsersCount={this.props.totalUsersCount}
            unfollow={this.props.unfollow}
        />
    }
}

export default UsersClassContainer;