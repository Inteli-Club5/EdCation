import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import programacaoImg from './images/programacao.png';
import financasImg from './images/finance.png';

class Escolha extends Component {
    render() {
        return (
            <div className="escolha-container">
                <h1 className="escolha-title">O que você gostaria de aprender?</h1>
                <div className="cards-container">
                    <Link to="/home">
                        <div className="card">
                            <img src={programacaoImg} alt="Programação" className="card-image" />
                            <p className="card-text">Programação</p>
                        </div>
                    </Link>
                    <Link to="/home">
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