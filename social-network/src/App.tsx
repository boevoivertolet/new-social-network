import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Content} from './components/Content/Content';
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.appWrapper}>
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;


