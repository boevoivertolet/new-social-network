import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import styles from './App.module.css'
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import { Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {AppType} from './components/Types/Types';
import {addMessage} from './components/Store/Store';

function App(props: AppType) {
    return (

            <div className={styles.appWrapper}>
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/profile" element={<Profile
                            updateNewPostText={props.updateNewPostText}
                            likesCounter={props.likesCounter}
                            addPost={props.addPost}
                            postsData={props.state.profilePage.postsData}
                            newPostText={props.state.profilePage.newPostText}

                        />}/>

                        <Route path="/dialogs" element={<Dialogs
                            newPostText={props.state.dialogsPage.newPostText}
                            addMessage={props.addMessage}
                            updateNewMessageText={props.updateNewMessageText}
                            dialogsPage={props.state.dialogsPage}

                        />}/>

                        <Route path="/news" element={<News/>}/>

                        <Route path="/music" element={<Music/>}/>

                        <Route path="/settings" element={<Settings/>}/>

                    </Routes>
                </div>
            </div>

    );
}

export default App;


