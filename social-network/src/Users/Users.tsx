import {UsersType} from '../components/Types/Types';
import React from 'react';
import styles from './Users.module.css'
import {Button} from '../components/Button/Button';

export const Users = (props: UsersType) => {




    return <div className={styles.users}>
        {props.users.map((u) => {
            const follow = () => {props.follow(u.id)}
            const unfollow = () => {props.unfollow(u.id)}

            return <div className={styles.user_block} key={u.id}>
            <div>
                <div>
                    <img src={u.avaLink}/>
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
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </div>
                <div>{u.status}</div>
            </div>
        </div>})}
    </div>
}