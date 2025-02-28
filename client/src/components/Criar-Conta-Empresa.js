// CriarConta.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom';

const CriarContaEmpresa = () => {
    const [nome, setNome] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValida, setSenhaValida] = useState(true);
    const [nomeValido, setNomeValido] = useState(true);
    const [cnpjValido, setCNPJValido] = useState(true);
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
    const validarCNPJ = (cnpj) => {
        return cnpj.length > 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailValido = validarEmail(email);
        const senhaValida = validarSenha(senha);
        const nomeValido = validarNome(nome);
        const cnpjValido = validarCNPJ(cnpj);

        if (!nomeValido) {
            alert('Nome inválido!');
            setErroMensagem('Nome inválido!');
        } else if (!cnpjValido) {
            alert('CNPJ não pode estar vazio!');
            setErroMensagem('CNPJ não pode estar vazio!');
        } else if (!emailValido) {
            alert('Email não pode estar vazio!');
            setErroMensagem('Email não pode estar vazio!');
        } else if (!senhaValida) {
            alert('A senha deve estar vazia!');
            setErroMensagem('A senha deve estar vazia!');
        } else {
            setErroMensagem('');
            console.log(`Conta criada com sucesso para o tipo: ${tipoConta}`);
            navigate("/home-empresa");  // Após o cadastro, redireciona para a página de escolha
        }

        setCNPJValido(cnpjValido);
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
                            <h7 className='textforbox'>CNPJ</h7>
                        </div>
                        <input
                            className='caixadetexto'
                            type='text'
                            name='CNPJ'
                            value={cnpj}
                            onChange={(e) => setCNPJ(e.target.value)}
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
                        <Link className='senhaText' to="/login-empresa">Já Possuo Conta</Link>
                    </div>
                    <div className='container-botoes'>
                        <button className='botao-login botao-login2' onClick={handleSubmit}>Criar Conta</button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriarContaEmpresa;
