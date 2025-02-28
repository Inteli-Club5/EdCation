// PreStart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreStart = () => {
    const navigate = useNavigate();

    const handleEscolhaConta = (tipo) => {
        navigate(`/criar-conta`);
    };

    return (
        <div className="containerReg">
            <div className="metadeReg">
                <div className="cadastroMeio">
                    <h2 className="titulo1">
                        Escolha o Tipo de <strong className="lightgreen">Conta</strong>
                    </h2>
                    <div className="container-botoes">
                        <button className="botao-login botao-login2" onClick={() => handleEscolhaConta('aluno')}>
                            Conta de Aluno
                        </button>
                        <button className="botao-login botao-login2" onClick={() => handleEscolhaConta('empresarial')}>
                            Conta Empresarial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreStart;
