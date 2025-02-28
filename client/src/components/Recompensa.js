import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import avatar from './images/avatar.png';
import tokensImg from './images/tokens.png';
import voltar from './images/voltar.png';
import ingresso from './images/Ingresso.png';
import arte from './images/Ingresso.png'
import musica from './images/album.jpg'

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

    const Recomp = [
        { name: "Ingresso", resumo:"Ingresso para o evento Crypto EdCation3", SMD: "SMD: 20,00", imagem: ingresso},
        { name: "Arte", resumo:"Pintura criada por Lucas Santos em 2015 durante o ExpoSãoPaulo.", SMD: "SMD: 50,00", imagem: arte},
        { name: "Música", resumo:"Música Eletrônica produzida por Porter Jackson", SMD: "SMD: 70,00", imagem: musica},
    ];
    return (
        <div className='containerHomeG'>
            <div className="menu-container">
                <div className="logo-container">
                    <Link to="/home">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <center>
                </center>
                <div className="profile-container">
                    <Link to="/conta">
                        <img src={profile} alt="Conta" className="profile-image" />
                    </Link>
                </div>
            </div>
            <div className="content-container">
                <div className='RecTok'>
                    <h1 className="title">Recompensas</h1>
                    <div className='tokem'>
                        <h1 className="title5">Tokens</h1>
                    </div>
                </div>
                <hr className="horizontal-line" />
                <div className="tracks-container">
                {Recomp.map((premio, index) => (
                    <div className='track-card2'>
                        <img src={premio.imagem} className='track-icon2' />
                        <p className="track-name2">{premio.name}</p>
                        <p className='textT'>{premio.resumo}</p>
                        <p className="titulo7">{premio.SMD}</p>
                        <button className='buttonComprar'>Comprar</button>
                    </div>
                ))};
                </div>
            </div>
        </div>
    );
};

export default Recompensa;