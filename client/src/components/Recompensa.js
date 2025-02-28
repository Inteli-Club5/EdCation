import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import ingresso from './images/Ingresso.png';
import arte from './images/Ingresso.png';
import musica from './images/arbitrum.png';

const Modal = ({ isOpen, onClose, premio }) => {
    if (!isOpen || !premio) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={premio.imagem} className="track-icon-2" alt={premio.name} />
                <h2>{premio.name}</h2>
                <p className='texto'>{premio.resumo}</p>
                <center>
                    <p className='titulo7'>{premio.SMD}</p>
                </center>
                <button className="buttonComprar">Comprar</button>
                <button className="close-button" onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

const Recompensa = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [premioSelecionado, setPremioSelecionado] = useState(null);

    const abrirModal = (premio) => {
        setPremioSelecionado(premio);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setPremioSelecionado(null);
    };

    const Recomp = [
        { name: "Ingresso", resumo: "Ingresso para o evento Crypto EdCation3", SMD: "SMD: 20,00", imagem: ingresso },
        { name: "Arte", resumo: "Pintura criada por Lucas Santos em 2015 durante o ExpoSãoPaulo.", SMD: "SMD: 50,00", imagem: arte },
        { name: "Música", resumo: "Música Eletrônica produzida por Porter Jackson", SMD: "SMD: 70,00", imagem: musica },
    ];

    return (
        <div className='containerHomeG'>
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
                <div className='RecTok'>
                    <h1 className="title">Recompensas</h1>
                </div>
                <hr className="horizontal-line" />
                <div className="tracks-container">
                    {Recomp.map((premio, index) => (
                        <div key={index} className='track-card2' onClick={() => abrirModal(premio)}>
                            <img src={premio.imagem} className='track-icon2' alt={premio.name} />
                            <p className="track-name2">{premio.name}</p>
                            <p className='textT'>{premio.resumo}</p>
                            <p className="titulo7">{premio.SMD}</p>
                            <button className='buttonComprar'>Comprar</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={modalAberto} onClose={fecharModal} premio={premioSelecionado} />
        </div>
    );
};

export default Recompensa;
