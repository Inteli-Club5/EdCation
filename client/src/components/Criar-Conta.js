import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

class CriarConta extends Component {
    render() {
        return (
            <div className='containerReg'>
                <div className='metadeReg'>
                    <div className='cadastroMeio'>
                        <h2 className='titulo1'>Crie sua <strong className='lightgreen'>Conta</strong></h2>
                        <div className='container-caixadetexto'>
                            <div className='content-titulo'>
                                <h7 className='textforbox'>Nome</h7>
                            </div>
                            <input className='caixadetexto' type='text' />
                            <div className='content-titulo'>
                                <h7 className='textforbox'>Data de Nascimento</h7>
                            </div>
                            <input className='caixadetexto' type='date' />
                            <div className='content-titulo'>
                                <h7 className='textforbox'>Email</h7>
                            </div>
                            <input className='caixadetexto' type='text' />
                            <div className='content-titulo'>
                                <h7 className='textforbox'>Senha</h7>
                            </div>
                            <input className='caixadetexto' type='password' />
                            <div className='content-titulo'>
                                <h7 className='textforbox'>Confirmar Senha</h7>
                            </div>
                            <input className='caixadetexto' type='password' />
                            <Link className='senhaText' to="/">Já Possuo Conta</Link>
                        </div>
                        <div className='container-botoes'>
                            <Link to="/escolha">
                                <button className='botao-login botao-login2'>Entrar</button>
                            </Link>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CriarConta;