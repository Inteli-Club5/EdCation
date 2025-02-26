import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

class CriarConta extends Component {
    render() {
        return (
            <div className='containerLog'>
                <div className='metade'>
                    <div className='loginMeio'>
                        <h2 className='titulo1'>Crie sua conta</h2>
                        <div className='container-caixadetexto'>
                            <input className='caixadetexto' placeholder='Nome' type='text' />
                            <h5>Data de Nascimento</h5>
                            <input className='caixadetexto' placeholder='Data De Nascimento' type='date' />
                            <input className='caixadetexto' placeholder='Email' type='text' />
                            <input className='caixadetexto' placeholder='Senha' type='password' />
                            <input className='caixadetexto' placeholder='Confirmar senha' type='password' />
                            <Link className='senhaText' to="/">Já Possuo Conta</Link>
                        </div>
                        <div className='container-botoes'>
                            <Link to="/home">
                                <button className='botao-login'>Entrar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CriarConta;