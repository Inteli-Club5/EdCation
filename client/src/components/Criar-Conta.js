import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();  // Usando o hook useNavigate

    // Função para validar o nome
    const validarNome = (nome) => {
        return nome.trim() !== '';
    };

    // Função para validar o email
    const validarEmail = (email) => {
        return email.length > 0;
    };

    // Função para validar a senha
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
        }  else {
            setErroMensagem('');
            navigate("/escolha");
            console.log("Conta criada com sucesso!");
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
                        <Link className='senhaText' to="/">Já Possuo Conta</Link>
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