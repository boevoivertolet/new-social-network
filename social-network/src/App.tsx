import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header"><img
                src="https://play-lh.googleusercontent.com/NuJSG_bIoce6kvvtJnULAf34_Rsa1j-HDEt4MWTOrL_3XA51QH9qOQR5UmAYxPI96jA"
                alt="tiger"/></header>
            <nav className="nav">
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                         alt="wall"/>
                </div>
                <div className="avatar-description">
                    <div ><img src="https://sun9-37.userapi.com/s/v1/ig2/1NrSBc1EVpXjT8D73Sdi0WJgoTBFVcyENMJssAXOe4umO-wb4jEhDof8IwkGo9bHCimTJxLg0WTHPl8yijZ_y1PJ.jpg?size=200x200&quality=95&crop=252,164,431,431&ava=1" alt=" avatar"/></div>
                    <div>
                        <div className='name'>Alexander B.</div>
                        <div className='description'>
                            <ul>
                                <li>Birthday: 29/05/1987</li>
                                <li>City:Saint-Petersburg</li>
                                <li>Education: it-incubator</li>
                                <li>Web-Site: <a href="https://vk.com/nakalahinei">https://vk.com/nakalahinei</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="my-posts">
                    <h3>My posts</h3>
                    <textarea name="yor news"></textarea>
                    <button>send</button>
                </div>
                <div className="main-content">------- main content -------</div>
            </div>
        </div>
    );
}

export default App;
