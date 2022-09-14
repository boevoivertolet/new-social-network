import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import styles from './App.module.css'
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

function App() {
    return (

            <div className={styles.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>

                        <Route path="/dialogs" element={<Dialogs/>}/>

                        <Route path="/news" element={<News/>}/>

                        <Route path="/music" element={<Music/>}/>

                        <Route path="/settings" element={<Settings/>}/>

                    </Routes>
                </div>
            </div>

    );
}

export default App;


