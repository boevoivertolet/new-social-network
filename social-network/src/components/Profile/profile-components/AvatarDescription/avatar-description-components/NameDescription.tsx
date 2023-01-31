import React from 'react';
import styles from './NameDescription.module.css'
import {NameDescriptionType} from '../../../../Types/Types';
import {ProfileStatus} from '../ProfileStatus';

export const NameDescription = (props: NameDescriptionType) => {
    return <div>
        <div className={styles.name}>{props.userName}.</div>
        <ProfileStatus status={'hi'}/>
        <div className={styles.description}>
            <ul>
                <li>Обо мне: {props.aboutMe}</li>
                <li>Ищу работу: {props.lookingForAJob ? 'да' : 'нет'}</li>
                <li>Описание поиска: {props.lookingForAJobDescription} </li>
            </ul>
            {
                props.contacts
                    ? <div>
                        <ul>
                            contacts:
                            {props.contacts.vk ? <li><a href={props.contacts.vk}>vk</a></li> : null}
                            {props.contacts.github ?
                                <li><a href={props.contacts.github}>github</a></li> : null}
                            {props.contacts.facebook ?
                                <li><a href={props.contacts.facebook}>facebook</a></li> : null}
                            {props.contacts.twitter ?
                                <li><a href={props.contacts.twitter}>twitter</a></li> : null}
                            {props.contacts.instagram ?
                                <li><a href={props.contacts.instagram}>instagram</a></li> : null}
                        </ul>
                    </div>
                    : null
            }
        </div>
    </div>

}