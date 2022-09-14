import React from 'react';
import {DialogsMessagesType} from '../../../Types/Types';
import styles from './DialogsMessages.module.css'



export const DialogsMessages = (props: DialogsMessagesType) => {
    return <div className={styles.dialogs_messages}>Name + Messages:
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis deserunt dolore, dolorem
            dolores earum eveniet laboriosam nihil nostrum, perspiciatis provident quibusdam reprehenderit similique
            tempora ut. Accusantium, aliquid aut blanditiis consequuntur cupiditate distinctio dolore dolores
            exercitationem, facere fugit ipsum mollitia, nihil nisi quaerat quia tempora veniam voluptatem!
            Consequuntur ex illo inventore non obcaecati. Architecto neque numquam, placeat quibusdam quidem
            sapiente similique.</div>
    </div>

}