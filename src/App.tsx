import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src='http://www.dsource.in/sites/default/files/case-study/logo-70-years-indias-independence/download-logo/images/Ashley-logo.png'/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Message</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img
                        src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
