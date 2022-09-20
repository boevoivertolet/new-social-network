import React from 'react';
import {SidebarType} from '../../../Types/Types';
import styles from './Sidebar.module.css'

export const Sidebar = (props: SidebarType) => {
    return <div className={styles.sidebar}>
        <div className={styles.sidebar_header}>
            <h4>Friends: </h4>
        </div>
        <div className={styles.sidebar_names}>
            <div className={styles.sidebar_name}><img className={styles.sidebar_name_img}
                                                      src={props.peoples[0].link}/>{props.peoples[0].name}
            </div>

            <div className={styles.sidebar_name}><img className={styles.sidebar_name_img}
                                                      src={props.peoples[1].link}/>{props.peoples[1].name}
            </div>

            <div className={styles.sidebar_name}><img className={styles.sidebar_name_img}
                                                      src={props.peoples[2].link}/>{props.peoples[2].name}
            </div>
        </div>
    </div>
}