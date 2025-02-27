import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className='containerLog'>
                <div className='metade'>
                    <div className='loginMeio'>
                        <div className='content-titulo'>
                            <h2 className='titulo1'>Conecte sua <strong className='lightgreen'>Conta</strong></h2>
                        </div>
                        <div className='container-caixadetexto'>
                            <div className='content-titulo'>
                                <h5 className='textforbox'>Email</h5>
                            </div>
                            <input className='caixadetexto' type='text' />
                            <div className='content-titulo'>
                                <h5 className='textforbox'>Senha</h5>
                            </div>
                            <input className='caixadetexto' type='password' />
                        </div>
                        <div className='container-botoes'>
                            <Link to="/criar-conta" >
                                <button className='botao-login botao-login2'>Criar Conta</button>
                            </Link>
                            <Link to="/escolha">
                                <button className='botao-login'>Entrar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;