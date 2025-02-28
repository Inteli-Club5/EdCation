import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import blockchain from './images/blockchain.png';
import chainlink from './images/chainlink.png';
import bitcoin from './images/bitcoin.png';
import DeFi from './images/DeFi.png';
import metamask from './images/metamask.png';
import arbitrum from './images/arbitrum.png';
import ethereum from './images/ethereum.png';
import scroll from './images/scroll.png';
import avatar from './images/avatar.png';
import tokensImg from './images/tokens.png';

import { getEscolhaUsuario } from './Escolha';

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
        { name: "ARB", image: arbitrum, width: 0 },
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

    const Ranking = [
        { position: 1, name: "Ronaldo de Lemos", tokens: "132.500" },
        { position: 2, name: "Gabriel dos Santos", tokens: "114.142" },
        { position: 3, name: "Alicia Munhoz", tokens: "106.890" },
        { position: 4, name: "Pedro Correia", tokens: "102.860" },
        { position: 5, name: "Thais da Silva", tokens: "100.060" },
    ];

    const tracks = escolha === "Finanças" ? financeTracks : programmingTracks;

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
                <h1 className="title">{escolha === "Finanças" ? "Finanças" : "Programação"}</h1>
                <hr className="horizontal-line" />
                <div className="tracks-container">
                    {tracks.map((track, index) => (
                        <div key={index} className="track-card" onClick={() => openModal(track.name, track.image)}>
                            <img src={track.image} className={track.name === "DeFi" || "Blockchain" ? "track-icon2" : "track-icon"} alt={track.name} />
                            <p className="track-name">{track.name}</p>
                            <p className={track.name === "Arbitrum" ? "access-link access" : "access-link hire"}>{track.name === "Arbitrum" ? "Acesse" : "Assine"}</p>
                            <div className="progress-bar-container">
                                <div className="progress-bar" style={{ width: `${track.width}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={selectedTrack} trackImage={trackImage} description={trackDescription} />
            <div className="content-container">
                <h1 className="title">Ranking</h1>
                <hr className="horizontal-line" />
                <div className='rankingGeral'>
                    <div className='div-rank'>
                        {Ranking.map((person, index) => (
                            <div key={index} className='rank'>
                                <div className='rank-part1'>
                                    <h2 className='titulo2'>{person.position}</h2>
                                    <img className='iconeJ' src={avatar} alt="Avatar" />
                                    <h2 className='titulo2'>{person.name}</h2>
                                </div>
                                <div className='rank-part2'>
                                    <img className='iconeJ2' src={tokensImg} alt="Tokens" />
                                    <h4 className='tokensNum'>{person.tokens}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;