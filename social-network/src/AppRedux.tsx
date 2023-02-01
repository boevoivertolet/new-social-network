import React from 'react';
import styles from './App.module.css'
import {Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {AppType} from './components/Types/Types';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';



export function AppRedux(props: AppType) {
    return (

        <div className={styles.appWrapper}>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className={styles.content}>
                <Routes>
                    <Route path="/profile/">
                        <Route index element={<ProfileContainer/>}/>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>

                    <Route path="/dialogs" element={<DialogsContainer/>}/>

                    <Route path="/news" element={<News/>}/>

                    <Route path="/music" element={<Music/>}/>

                    <Route path="/settings" element={<Settings/>}/>

                    <Route path="/users" element={<UsersContainer/>}/>

                    <Route path="/login" element={<Login/>}/>

                </Routes>
            </div>
        </div>

    );
}




