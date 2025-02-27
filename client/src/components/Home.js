import React, { useState } from 'react';
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

const trackDescriptions = { /* ... descrições mantidas ... */ };

const Modal = ({ isOpen, onClose, title, trackImage, description }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={trackImage} className="track-icon-2" alt={title} />
                <h2>{title}</h2>
                <p className='texto'>{description}</p>
                <Link to='/quiz'>
                    <button className="start-button">Iniciar</button>
                </Link>
                <button className="close-button" onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState("");
    const [trackImage, setTrackImage] = useState(null);
    const [trackDescription, setTrackDescription] = useState("");

    const escolha = getEscolhaUsuario();

    const openModal = (trackName, trackImage) => {
        setSelectedTrack(trackName);
        setTrackImage(trackImage);
        setTrackDescription(trackDescriptions[trackName] || "Descrição não disponível.");
        setModalOpen(true);
    };

    const financeTracks = [
        { name: "Wallet", image: metamask, width: 10 },
        { name: "Blockchain", image: blockchain, width: 0 },
        { name: "Layer 2", image: layer2, width: 0 },
        { name: "LINK", image: chainlink, width: 0 },
        { name: "Bitcoin", image: bitcoin, width: 0 },
        { name: "DeFi", image: DeFi, width: 0 }
    ];

    const programmingTracks = [
        { name: "Arbitrum", image: arbitrum, width: 20 },
        { name: "Blockchain", image: blockchain, width: 0 },
        { name: "Chainlink", image: chainlink, width: 0 },
        { name: "Bitcoin", image: bitcoin, width: 0 },
        { name: "Ethereum", image: ethereum, width: 0 },
        { name: "Scroll", image: scroll, width: 0 }
    ];

    const tracks = escolha === "Finanças" ? financeTracks : programmingTracks;

    return (
        <div className='containerHome'>
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
                <h1 className="title">Tracks {escolha === "Finanças" ? "Financeiras" : "de Programação"}</h1>
                <hr className="horizontal-line" />
                <div className="tracks-container">
                    {tracks.map((track, index) => (
                        <div key={index} className="track-card" onClick={() => openModal(track.name, track.image)}>
                            <img src={track.image} className="track-icon" alt={track.name} />
                            <p className="track-name">{track.name}</p>
                            <p className="access-link access">Acesse</p>
                            <div className="progress-bar-container">
                                <div className="progress-bar" style={{ width: `${track.width}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={` ${selectedTrack}`} trackImage={trackImage} description={trackDescription} />
        </div>
    );
};

export default Home;
