import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import blockchain from './images/blockchain.png';
import layer2 from './images/Layer2.png';
import chainlink from './images/chainlink.png';
import bitcoin from './images/bitcoin.png';
import DeFi from './images/DeFi.png';
import metamask from './images/metamask.png';
import arbitrum from './images/arbitrum.png';
import ethereum from './images/ethereum.png';
import scroll from './images/scroll.png';

import { getEscolhaUsuario } from './Escolha';

class Home extends Component {
    renderTracks = () => {
        const escolha = getEscolhaUsuario();
        if (escolha === "Finanças") {
            return (
                <div>
                    <h1 className="title">Tracks Financeiras</h1>
                    <hr className="horizontal-line" />
                    <div className="tracks-container">
                        <div className="track-card">
                            <img src={arbitrum} className="track-icon"></img>
                            <p className="track-name">ARB</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={metamask} className="track-icon"></img>
                            <p className="track-name">Wallet</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={blockchain} className="track-icon"></img>
                            <p className="track-name">Blockchain</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={layer2} className="track-icon"></img>
                            <p className="track-name">Layer 2</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={bitcoin} className="track-icon"></img>
                            <p className="track-name">Bitcoin</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={DeFi} className="track-icon2"></img>
                            <p className="track-name">DeFi</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                    </div>
                </div>
            );
        } else if (escolha === "Programação") {
            return (
                <div>
                    <h1 className="title">Tracks de Programação</h1>
                    <hr className="horizontal-line" />
                    <div className="tracks-container">
                        <div className="track-card">
                            <img src={arbitrum} className="track-icon"></img>
                            <p className="track-name">Arbitrum</p>
                            <p className="access-link access">Acesse</p>
                        </div>
                        <div className="track-card">
                            <img src={blockchain} className="track-icon"></img>
                            <p className="track-name">Blockchain</p>
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
            );
        }
    };

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
                    {this.renderTracks()}
                </div>
            </div>
        );
    }
}

export default Home;