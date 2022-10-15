import React from 'react';
import styles from './NameDescription.module.css'
import {NameDescriptionType} from '../../../../Types/Types';

export const NameDescription = (props: NameDescriptionType) => {
    return <div>
        <div className={styles.name}>{props.userName}.</div>
        <div className={styles.description}>
            <ul>
                <li>Обо мне: {props.aboutMe}</li>
                <li>Ищу работу: <input type="checkbox" checked={props.lookingForAJob}/></li>
                <li>Описание поиска: {props.lookingForAJobDescription} </li>
            </ul>
            <div>contacts:
                <ul>
                    <li><a> {props.contacts ? props.contacts.vk : null}</a></li>
                    <li><a> {props.contacts ? props.contacts.github : null}</a></li>
                    <li><a> {props.contacts ? props.contacts.facebook : null}</a></li>
                    <li><a> {props.contacts ? props.contacts.twitter : null}</a></li>
                    <li><a> {props.contacts ? props.contacts.instagram : null}</a></li>
                </ul>
            </div>
        </div>
    </div>

}