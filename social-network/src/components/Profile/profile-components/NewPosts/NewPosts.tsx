import React from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from './newpost-components/UniversalTextarea';

export const NewPosts = () => {

    return <div className={styles.newPosts}>
        <div>
            <UniversalTextarea/>
            <Button title={'send'}/>
        </div>
    </div>
}

