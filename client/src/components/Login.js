import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className='containerLog'>
                <div className='metade'>
                    <div className='loginMeio'>
                        <h2 className='titulo1'>Conecte sua conta</h2>
                        <div className='container-caixadetexto'>                       
                            <input className='caixadetexto'></input>
                            <input className='caixadetexto'></input>
                            <a className='senhaText'>Esqueceu sua senha?</a>
                        </div>
                        <div className='container-botoes'>
                        </div> 
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Login;