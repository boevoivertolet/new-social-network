import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.appWrapper}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;


