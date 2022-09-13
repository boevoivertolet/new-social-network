import React from 'react';
import styles from './NameDescription.module.css'

export const NameDescription = () => {
    return <div>
        <div className={styles.name}>Alexander B.</div>
        <div className={styles.description}>
            <ul>
                <li>Birthday: 29/05/1987</li>
                <li>City: Saint-Petersburg</li>
                <li>Education: it-incubator</li>
                <li>Web-Site: <a href="https://vk.com/nakalahinei">https://vk.com/nakalahinei</a></li>
            </ul>
        </div>
    </div>

}