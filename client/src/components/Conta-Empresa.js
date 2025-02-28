import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import empresa from './images/empresa.png';

const ContaEmpresa = () => {

    return (
        <div className='perfil-geral'>
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
                <h1 className="title">Perfil</h1>
                <hr className="horizontal-line" />
                <div className='content-perfil'>
                    <div className="profile-detail"><strong>Nome:</strong> CryptoCode</div>
                    <div className="profile-detail"><strong>Email:</strong> org.cryptocode@outlook.com</div>
                    <div className="profile-detail"><strong>CNPJ:</strong> 12.345.678/0001-95</div>
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
};

export default ContaEmpresa;
