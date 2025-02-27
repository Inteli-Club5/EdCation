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

    const isArbitrumTrack = title.trim() === "Arbitrum" || title.trim() === "ARB";

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={trackImage} className="track-icon-2" alt={title} />
                <h2>{title}</h2>
                <p className='texto'>{description}</p>
                <Link to={isArbitrumTrack ? '/quiz' : '#'}>
                    <button className="start-button" disabled={!isArbitrumTrack}>Iniciar</button>
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
        { name: "ARB", image: arbitrum, width: 10 },
        { name: "Wallet", image: metamask, width: 0 },
        { name: "Blockchain", image: blockchain, width: 0 },
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

    const trackDescriptions = {
        "ARB": "Arbitrum é uma solução de escalabilidade de segunda camada para Ethereum, que melhora a velocidade e reduz taxas de transação.",
        "Wallet": "Uma carteira digital permite armazenar, enviar e receber criptomoedas com segurança.",
        "Blockchain": "Blockchain é uma tecnologia de registro distribuído que garante segurança e transparência em transações digitais.",
        "Chainlink": "Chainlink é uma rede descentralizada de oráculos que conecta contratos inteligentes a dados do mundo real.",
        "LINK": "Chainlink é uma rede descentralizada de oráculos que conecta contratos inteligentes a dados do mundo real.",
        "Bitcoin": "Bitcoin é a primeira criptomoeda descentralizada, projetada para ser um meio de troca digital seguro e sem intermediários.",
        "DeFi": "Finanças Descentralizadas (DeFi) representam um ecossistema de serviços financeiros abertos baseados em blockchain.",
        "Arbitrum": "Arbitrum utiliza Rollups para processar transações fora da cadeia principal do Ethereum, garantindo eficiência e baixo custo.",
        "Ethereum": "Ethereum é uma plataforma blockchain que permite a criação de contratos inteligentes e aplicativos descentralizados.",
        "Scroll": "Scroll é uma solução de escalabilidade para Ethereum baseada em Zero-Knowledge Rollups, promovendo transações rápidas e econômicas."
    };

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
                            <img src={track.image} className={track.name === "DeFi" ? "track-icon2" : "track-icon"}  alt={track.name} />
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