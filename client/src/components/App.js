import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import CriarConta from './Criar-Conta';
import Conta from './Conta';
import Escolha from './Escolha';
import Quiz from './Quiz';
import Lessons from './Teorico';
import Assinatura from './Assinatura';
import PreStart from './PreStart';  // Importando a página PreStart
import Recompensa from './Recompensa';
import LoginEmpresa from './LoginEmpresa';
import CriarContaEmpresa from './Criar-Conta-Empresa';
import HomeEmpresa from './Home-Empresa';
import ContaEmpresa from './Conta-Empresa';
import Iteracao from './Iteracao';

class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/login-empresa" element={<LoginEmpresa />} />
                    <Route path="/criar-conta-empresa" element={<CriarContaEmpresa />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/home-empresa" element={<HomeEmpresa />} />
                    <Route path="/conta-empresa" element={<ContaEmpresa />} />
                    <Route path="/" element={<PreStart />} />
                    <Route path="/criar-conta" element={<CriarConta />} />
                    <Route path="/escolha" element={<Escolha />} />
                    <Route path="/conta" element={<Conta />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/licoes" element={<Lessons />} />
                    <Route path="/assinatura" element={<Assinatura />} />
                    <Route path="/recompensa" element={<Recompensa />} />
                    <Route path="/Iteracao" element={<Iteracao />} />
                </Routes>
            </div>
        );
    }
}

export default App;
