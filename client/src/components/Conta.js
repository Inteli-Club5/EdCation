import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import certificado from './images/certificado.png';

class Conta extends Component {
    handleLogout = () => {
        console.log("Usuário saiu da conta");
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
                    <h1 className="title">Certificados</h1>
                    <hr className="horizontal-line" />
                    <div className="tracks-container">
                        <div className="track-card">
                            <img src={certificado} className="track-icon-2" alt="Certificado" />
                            <p className="track-name">Certificado #1</p>
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
                    </div>
                    <div className="logout-container">
                        <Link to='/'>
                        <button>Sair da Conta</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conta;