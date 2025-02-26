import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;