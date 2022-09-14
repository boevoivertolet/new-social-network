import React from 'react';
import {DialogsType} from '../Types/Types';
import styles from './Dialogs.module.css'


export const Dialogs = (props: DialogsType) => {
    return <div className={styles.dialogs}>
        <div className={styles.dialogs_names}>Dialogs:
            <div>Name1</div>
            <div>Name2</div>
            <div>Name3</div>
            <div>Name4</div>
            <div>Name5</div>
            <div>Name6</div>
            <div>Name7</div>
            <div>Name8</div>
            <div>Name9</div>
            <div>Name10</div>
        </div>
        <div className={styles.dialogs_messages}>Name + Messages:
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis deserunt dolore, dolorem dolores earum eveniet laboriosam nihil nostrum, perspiciatis provident quibusdam reprehenderit similique tempora ut. Accusantium, aliquid aut blanditiis consequuntur cupiditate distinctio dolore dolores exercitationem, facere fugit ipsum mollitia, nihil nisi quaerat quia tempora veniam voluptatem! Consequuntur ex illo inventore non obcaecati. Architecto neque numquam, placeat quibusdam quidem sapiente similique. Debitis delectus dolore, eum illo numquam quis sunt temporibus ullam voluptatem? Accusamus alias, excepturi itaque mollitia non pariatur? Cupiditate debitis delectus esse expedita fuga illo libero qui saepe soluta veritatis. In maxime officiis tenetur vero! Molestiae perferendis suscipit ut.</div>
        </div>
    </div>
}