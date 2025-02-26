import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;