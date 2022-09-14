import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import styles from './App.module.css'
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.content}>
                    <Routes>

                        <Route path="/dialog" element={<Dialogs/>}/>

                        <Route path="/profile" element={<Profile/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


