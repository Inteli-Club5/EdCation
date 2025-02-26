import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className='containerLog'>
                <div className='metade'>
                    <div className='loginMeio'>
                        <h2 className='titulo1'>Conecte sua conta</h2>
                        <div className='container-caixadetexto'>                       
                            <input className='caixadetexto' placeholder='Usuário' type='text'/>
                            <input className='caixadetexto' placeholder='Senha' type='password'/>
                            <a className='senhaText' href='#'>Esqueceu sua senha?</a>
                        </div>
                        <div className='container-botoes'>
                            <button className='botao-login'>Entrar</button>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;