// PreStart.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import empresa from './images/empresa.png';
import profile from './images/profile-1.png';

const PreStart = () => {
    return (
        <div className="escolha-container">
            <h1 className="escolha-title">Escolha o Tipo de <strong className='gradient'>Conta</strong></h1>
            <div className="cards-container">
                <div className="card2">
                    <div className='meioCard'>
                        <img src={profile} alt="Usuário" className="card-image" />
                    </div>
                    <p className="titulo2">Usuário</p>
                    <Link to="/login">
                        <button className='buttonEscolha'>Seguir</button>
                    </Link>
                </div>
                <div className="card2">
                    <div className='meioCard meioCard2'>
                        <img src={empresa} alt="Empresa" className="card-image" />
                    </div>
                    <p className="titulo2">Empresa</p>
                    <Link to="/login-empresa">
                        <button className='buttonEscolha'>Seguir</button>
                    </Link>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default PreStart;
