// CriarConta.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const CriarConta = () => {
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValida, setSenhaValida] = useState(true);
    const [nomeValido, setNomeValido] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    // Obter o tipo de conta a partir do estado passado pela navegação
    const tipoConta = location.state?.tipo;

    const validarNome = (nome) => {
        return nome.trim() !== '';
    };

    const validarEmail = (email) => {
        return email.length > 0;
    };

    const validarSenha = (senha) => {
        return senha.length > 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailValido = validarEmail(email);
        const senhaValida = validarSenha(senha);
        const nomeValido = validarNome(nome);

        if (!nomeValido) {
            alert('Nome inválido!');
            setErroMensagem('Nome inválido!');
        } else if (!emailValido) {
            alert('Email não pode estar vazio!');
            setErroMensagem('Email não pode estar vazio!');
        } else if (!senhaValida) {
            alert('A senha deve estar vazia!');
            setErroMensagem('A senha deve estar vazia!');
        } else {
            setErroMensagem('');
            console.log(`Conta criada com sucesso para o tipo: ${tipoConta}`);
            navigate("/escolha");  // Após o cadastro, redireciona para a página de escolha
        }

        setEmailValido(emailValido);
        setSenhaValida(senhaValida);
        setNomeValido(nomeValido);
    };

    return (
        <div className='containerReg'>
            <div className='metadeReg'>
                <div className='cadastroMeio'>
                    <h2 className='titulo1'>Crie sua <strong className='lightgreen'>Conta</strong></h2>
                    <p>Tipo de conta selecionada: {tipoConta}</p> {/* Exibe o tipo de conta escolhido */}
                    <div className='container-caixadetexto'>
                        <div className='content-titulo'>
                            <h7 className='textforbox'>Nome</h7>
                        </div>
                        <input
                            className='caixadetexto'
                            type='text'
                            name='nome'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <div className='content-titulo'>
                            <h7 className='textforbox'>Data de Nascimento</h7>
                        </div>
                        <input
                            className='caixadetexto'
                            type='date'
                            name='nascimento'
                            value={nascimento}
                            onChange={(e) => setNascimento(e.target.value)}
                        />
                        <div className='content-titulo'>
                            <h7 className='textforbox'>Email</h7>
                        </div>
                        <input
                            className='caixadetexto'
                            type='text'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className='content-titulo'>
                            <h7 className='textforbox'>Senha</h7>
                        </div>
                        <input
                            className='caixadetexto'
                            type='password'
                            name='senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        
                        <div className='content-titulo'>
                            <h7 className='textforbox'>Confirmar Senha</h7>
                        </div>
                        <input
                            className='caixadetexto'
                            type='password'
                            name='confirmarSenha'
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                    </div>
                    <div className='container-botoes'>
                        <button className='botao-login botao-login2' onClick={handleSubmit}>Criar Conta</button>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriarConta;
