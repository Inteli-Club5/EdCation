import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import certificado from './images/certificado.jpeg';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={certificado} className="track-icon-2" />
                <p className="access-link access-2">Arbitrum</p>
                <p className="centraliza">0x42DC444aA142f78a8de8c7304BBBCd5B6581fe32</p>
                <button className="close-button" onClick={onClose}>&times;</button>
                <a href="https://sepolia.arbiscan.io/address/0x42DC444aA142f78a8de8c7304BBBCd5B6581fe32">
                    <button className="start-button">Acesse</button>
                </a>
            </div>
        </div>
    );
};

const Conta = () => {
    
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (trackName, trackImage) => {
        setModalOpen(true);
    };

    return (
        <div className='perfil-geral'>
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
                <h1 className="title">Certificados</h1>
                <hr className="horizontal-line" />
                <div className="tracks-container">
                    <div className="track-card" onClick={() => openModal()}>
                        <img src={certificado} className="track-icon-3" alt="Certificado" />
                        <br/>
                        <p className="track-name">Certificado</p>
                        <p className="access-link access-2">Arbitrum</p>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <h1 className="title">Perfil</h1>
                <hr className="horizontal-line" />
                <div className='content-perfil'>
                    <div className="profile-detail"><strong>Nome:</strong> Mateus Costa </div>
                    <div className="profile-detail"><strong>Email:</strong> mateus.costa@outlook.com</div>
                    <div className="profile-detail"><strong>Data de Nascimento:</strong> 08/05/1998 </div>
                    <div className="profile-detail"><strong>Chave Pública:</strong> 0x6B509c04e3caA2207b8f2A60A067a8ddED03b8d0</div>
                    <div className="profile-detail"><strong>Tokens:</strong> 0,00</div>
                </div>
                <div className="logout-container">
                    <Link to='/'>
                        <button>Sair da Conta</button>
                    </Link>
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} className="CorTroca" />
        </div>
        
    );
}


export default Conta;