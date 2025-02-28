import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import ingresso from './images/Ingresso.png';
import arte from './images/Arte.png';
import musica from './images/musica.png';

const Modal = ({ isOpen, onClose, premio }) => {
    if (!isOpen || !premio) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={premio.imagem} className="track-icon-2" alt={premio.name} />
                <h2>{premio.name}</h2>
                <a class="texto-link" href={`https://sepolia.scrollscan.com/address/${premio.resumo}`}>
                    <p className="texto-link">{premio.resumo}</p>
                </a>
                <center>
                    <p className='titulo7'>{premio.SMD}</p>
                </center>
                <button className="buttonComprar">Adquirir</button>
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
        { name: "Ingresso", resumo: "0xcAeFEc77F848504C2559801180d8284B5dBcD86E", SMD: "SMD: 20,00", imagem: ingresso },
        { name: "Arte", resumo: "0x42DC444aA142f78a8de8c7304BBBCd5B6581fe32", SMD: "SMD: 50,00", imagem: arte },
        { name: "Música", resumo: "0x2fc88293BF7026DA8326542844227Bf82423359E", SMD: "SMD: 70,00", imagem: musica },
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
                            <p className="titulo7">{premio.SMD}</p>
                            <button className='buttonComprar'>Adquirir</button>
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
