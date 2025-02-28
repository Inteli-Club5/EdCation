import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import avatar from './images/avatar.png';
import tokensImg from './images/tokens.png';
import voltar from './images/voltar.png';

import { getEscolhaUsuario } from './Escolha';

const Modal = ({ isOpen, onClose, title, trackImage, description }) => {
    if (!isOpen) return null;

    const isArbitrumTrack = title.trim() === "Arbitrum";

    return (
        <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={trackImage} className="track-icon-2" alt={title} />
            <h2>{title}</h2>
            <p className='texto'>{description}</p>
            <Link to={isArbitrumTrack ? '/licoes' : '/assinatura'}>
                <button className={isArbitrumTrack ? "start-button" : "assine-button"}>{isArbitrumTrack ? "Iniciar" : "Assinar"}</button>
            </Link>
            <button className="close-button" onClick={onClose}>&times;</button>
        </div>
    </div>

    );
};

const Recompensa = () => {
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

    return (
        <div className='containerHomeG'>
            <div className="menu-container">
                <div className="logo-container">
                    <Link to="/home">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <center>
                    <div className="logo-container2">
                        <Link class="no-effect" to="/escolha">
                            <h1 className='titulo4'>Tracks</h1>
                        </Link>
                    </div>
                </center>
                <div className="profile-container">
                    <Link to="/conta">
                        <img src={profile} alt="Conta" className="profile-image" />
                    </Link>
                </div>
            </div>
            <div className="content-container">
                <h1 className="title">Ingresso, Arte, Música, Arte</h1>
                <hr className="horizontal-line" />
                <div className="tracks-container">
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={selectedTrack} trackImage={trackImage} description={trackDescription} />
        </div>
    );
};

export default Recompensa;