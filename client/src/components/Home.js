import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import blockchain from './images/blockchain.png';
import arbitrum from './images/arbitrum.png';
import chainlink from './images/chainlink.png';
import bitcoin from './images/bitcoin.png';
import ethereum from './images/ethereum.png';
import scroll from './images/scroll.png';

class Home extends Component {
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
                    <h1 className="title">Tracks</h1>
                    <hr className="horizontal-line" />
                    <div className="tracks-container">
                        <div className="track-card">
                            <img src={blockchain} className="track-icon"></img>
                            <p className="track-name">Blockchain</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={arbitrum} className="track-icon"></img>
                            <p className="track-name">Arbitrum</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={chainlink} className="track-icon"></img>
                            <p className="track-name">Chainlink</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={bitcoin} className="track-icon"></img>
                            <p className="track-name">Bitcoin</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={ethereum} className="track-icon"></img>
                            <p className="track-name">Ethereum</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={scroll} className="track-icon"></img>
                            <p className="track-name">Scroll</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
