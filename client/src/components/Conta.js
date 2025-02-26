import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';

class Conta extends Component {
    render() {
        return (
            <div>
                <div className="menu-container">
                    <div className="logo-container">
                        <Link to="/home">
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>
                    </div>
                    <div className="profile-container">
                        <Link to="/conta">
                            <img src={profile} alt="Conta" className="profile-image" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default Conta;