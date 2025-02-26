import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './images/edcation3.png';

class Login extends Component {
    render() {
        return (
            <div className='containerLog'>
                <div className='metade'>
                    <div className='loginMeio'>
                        <h2 className='titulo1'>Conecte sua conta</h2>
                        <div className='container-caixadetexto'>                       
                            <input className='caixadetexto' placeholder='Email' type='text'/>
                            <input className='caixadetexto' placeholder='Senha' type='password'/>
                        </div>
                        <div className='container-botoes'>
                            <Link to="/criar-conta" >
                                <button className='botao-login'>Criar Conta</button>
                            </Link>
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

export default Login;