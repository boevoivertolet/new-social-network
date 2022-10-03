import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import styles from './App.module.css'
import { Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {AppType} from './components/Types/Types';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';


export function AppRedux(props: AppType) {
    return (

            <div className={styles.appWrapper}>
                <Header/>
                <NavbarContainer/>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer


                        />}/>

                        <Route path="/dialogs" element={<DialogsContainer


                        />}/>

                        <Route path="/news" element={<News/>}/>

                        <Route path="/music" element={<Music/>}/>

                        <Route path="/settings" element={<Settings/>}/>

                    </Routes>
                </div>
            </div>

    );
}




