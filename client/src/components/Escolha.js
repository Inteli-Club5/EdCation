import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import programacaoImg from './images/programacao.png';
import financasImg from './images/finance.png';

// Variável para armazenar a escolha do usuário
let escolhaUsuario = "";

export const setEscolhaUsuario = (escolha) => {
    escolhaUsuario = escolha;
};

export const getEscolhaUsuario = () => escolhaUsuario;

class Escolha extends Component {
    handleEscolha = (escolha) => {
        setEscolhaUsuario(escolha);
    };

    render() {
        return (
            <div className="escolha-container">
                <h1 className="escolha-title">O que você gostaria de aprender?</h1>
                <div className="cards-container">
                    <Link to="/home" onClick={() => this.handleEscolha("Programação")}>
                        <div className="card">
                            <img src={programacaoImg} alt="Programação" className="card-image" />
                            <p className="card-text">Programação</p>
                        </div>
                    </Link>
                    <Link to="/home" onClick={() => this.handleEscolha("Finanças")}>
                        <div className="card">
                            <img src={financasImg} alt="Finanças" className="card-image" />
                            <p className="card-text">Finanças</p>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
};

export default Escolha;
