import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import CriarConta from './Criar-Conta';
import Conta from './Conta';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/criar-conta" element={<CriarConta/>}/>
                        <Route path="/conta" element={<Conta/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;