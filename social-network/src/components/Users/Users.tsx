import styles from './Users.module.css';
import React, {MouseEvent} from 'react';
import userPhoto from '../../assets/images/user.jpg';
import {Button} from '../Button/Button';
import {UsersType} from '../Types/Types';
import {NavLink} from 'react-router-dom';

export const Users = (props: UsersType) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.users}>
        <div>
            {
                pages.map(p => <span  onClick={(e: MouseEvent<HTMLSpanElement>) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? styles.selectedPage : ''}>{ p } </span>)
            }

        </div>
        {props.users.map((u) => {
            const follow = () => {
                props.follow(u.id)
            }
            const unfollow = () => {
                props.unfollow(u.id)
            }

            return <div className={styles.user_block} key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile'}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <Button title={'follow'} callBack={unfollow}/>
                            : <Button title={'unfollow'} callBack={follow}/>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                    </div>
                    <div>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </div>
                    <div>{u.status}</div>
                </div>
            </div>
        })}
    </div>
}