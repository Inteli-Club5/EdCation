import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import certificado from './images/certificado.png';

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
                <div className="content-container">
                    <h1 className="title">Certificados</h1>
                    <hr className="horizontal-line" />
                    <div className="tracks-container">
                        <div className="track-card">
                            <img src={certificado} className="track-icon-2"></img>
                            <p className="track-name">Certificado #1</p>
                            <p className="access-link access-2">Blockchain</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Conta;