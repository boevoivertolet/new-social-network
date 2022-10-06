import {UsersType} from '../Types/Types';
import React from 'react';
import styles from './Users.module.css'
import {Button} from '../Button/Button';
import {v1} from 'uuid';
import {avatars} from '../Avatars/Avatars';

export const Users = (props: UsersType) => {


    if(props.users.length === 0){
        props.setUsers([
            {
                id: v1(),
                followed: true,
                name: avatars[0].name,
                avaLink: avatars[0].link,
                status: 'status',
                location: {country: 'Russia', city: 'Saint-Petersburg'}
            },
            {
                id: v1(),
                followed: false,
                name: avatars[1].name,
                avaLink: avatars[1].link,
                status: 'status',
                location: {country: 'Russia', city: 'Saint-Petersburg'}

            },
            {
                id: v1(),
                followed: true,
                name: avatars[2].name,
                avaLink: avatars[2].link,
                status: 'status',
                location: {country: 'Russia', city: 'Saint-Petersburg'}
            },
            {
                id: v1(),
                followed: false,
                name: avatars[3].name,
                avaLink: avatars[3].link,
                status: 'status',
                location: {country: 'Russia', city: 'Saint-Petersburg'}
            }

        ])
    }



    return <div className={styles.users}>
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
            </div>
        })}
    </div>
}