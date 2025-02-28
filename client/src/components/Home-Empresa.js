import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import empresa from './images/empresa.png';
import avatar from './images/avatar.png';
import tokensImg from './images/tokens.png';
import mulher from './images/mulher.png';
import homem from './images/homem.png';

const UserDescriptions = {
    "Lucas da Silva": "Sou um Desenvolvedor Web3 entusiasmado com novas tecnologias",
    "Manuela Araujo": "Sou uma Desenvolvedora que aspira por novos conhecimentos",
    "Patricia Fernandez": "Sou Designer e adoro o mundo das criptomoedas",
};

const Modal = ({ isOpen, onClose, title, trackImage, description }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={trackImage} className="track-icon-2" alt={title} />
                <h2>{title}</h2>
                <p className='texto'>{description}</p>
                <a href="mailto:contato@exemplo.com">
                    <button className="start-button">Contato</button>
                </a>
                <button className="close-button" onClick={onClose}>&times;</button>
            </div>
        </div>

    );
};

const HomeEmpresa = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState("");
    const [trackImage, setTrackImage] = useState(null);
    const [trackDescription, setTrackDescription] = useState("");

    const openModal = (trackName, trackImage) => {
        setSelectedTrack(trackName);
        setTrackImage(trackImage);
        setTrackDescription(UserDescriptions[trackName] || "Descrição não disponível.");
        setModalOpen(true);
    };

    const Users = [
        { name: "Lucas da Silva", image: homem, class: 'track-icon' },
        { name: "Manuela Araujo", image: profile, class: 'track-icon' },
        { name: "Patricia Fernandez", image: mulher, class: 'track-icon' },
    ];

    const Ranking = [
        { position: 1, name: "Ronaldo de Lemos", tokens: "132.500" },
        { position: 2, name: "Gabriel dos Santos", tokens: "114.142" },
        { position: 3, name: "Alicia Munhoz", tokens: "106.890" },
        { position: 4, name: "Pedro Correia", tokens: "102.860" },
        { position: 5, name: "Thais da Silva", tokens: "100.060" },
    ];

    return (
        <div className='containerHomeG'>
            <div className="menu-container">
                <div className="logo-container">
                    <Link to="/home-empresa">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <div className="profile-container">
                    <Link to="/conta-empresa">
                        <img src={empresa} alt="Conta" className="profile-image" />
                    </Link>
                </div>
            </div>
            <div className="content-container">
                <h1 className="title">Usuários</h1>
                <hr className="horizontal-line" />
                <div className="tracks-container">
                    {Users.map((User, index) => (
                        <div key={index} className="track-card" onClick={() => openModal(User.name, User.image)}>
                            <img src={User.image} className={User.class} alt={User.name} />
                            <p className="track-name">{User.name}</p>
                            <p className="access-link hire">Informações</p>
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

export default HomeEmpresa;