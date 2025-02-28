import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import tokensI from './images/tokens.png';
import arbitrum from './images/arbitrumsemfundo.png';

const codeChallenges = [
    {
        codeSnippet: `function checkArbitrum() {\n  // Complete this function to return if Arbitrum is a blockchain\n}`,
        solution: 'return true;',
        description: 'Complete a função para verificar se Arbitrum é uma blockchain.',
    },
    {
        codeSnippet: `const isArbitrumLayer = (layer) => {\n  // Complete this function to check if Arbitrum is Layer 2\n}`,
        solution: 'return layer === "Layer 2";',
        description: 'Complete a função para verificar se Arbitrum é uma camada 2.',
    },
    {
        codeSnippet: `function getName() {\n  // Complete this function to return "Arbitrum"\n}`,
        solution: 'return "Arbitrum";',
        description: 'Complete a função para retornar o nome "Arbitrum".',
    },
];


function Iteracao() {
    const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
    const [userCode, setUserCode] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [timeLeft, setTimeLeft] = useState(180); // Inicia com 60 segundos
    const [tokens, setTokens] = useState(0); // Estado para os tokens

    const challenge = codeChallenges[currentChallengeIndex];
    const navigate = useNavigate();  // Usando o hook useNavigate

    useEffect(() => {
        const storedTokens = localStorage.getItem('tokens');
        if (storedTokens) {
            setTokens(Number(storedTokens)); // Recupera os tokens do localStorage
        }
    }, []);

    const handleCodeChange = (e) => {
        setUserCode(e.target.value);
    };

    const handleSubmitCode = () => {
        if (userCode.trim() === challenge.solution) {
            setIsAnswerCorrect(true);
            setTokens((prevTokens) => prevTokens + 5); // Adiciona 5 tokens se o código estiver correto
        } else {
            setIsAnswerCorrect(false);
        }

        // Move para o próximo desafio após 1 segundo
        setTimeout(() => {
            handleNextChallenge();
        }, 1000);
    };

    const handleNextChallenge = () => {
        setIsAnswerCorrect(null);
        setUserCode('');
        if (currentChallengeIndex < codeChallenges.length - 1) {
            setCurrentChallengeIndex(currentChallengeIndex + 1);
            setTimeLeft(180); // Reseta o tempo para 60 segundos a cada novo desafio
        } else {
            // Redireciona para a página /recompensa após o último desafio
            navigate('/recompensa');
        }
    };

    return (
        <div className='containerHomeG'>
            <div className="menu-container">
                <div className="logo-container">
                    <Link to="/home">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <div className="profile-container">
                    <Link to="/conta">
                        <img src={profile} alt="Conta" className="profile-image" />
                    </Link>
                </div>
            </div>
            <div className="quiz-container2">
                <img src={arbitrum} className="track-icon-3" />
                <center>
                    <div class="quadrado-iterativo">
                        <h2 className='tituloQuestion white'>{challenge.description}</h2>
                        <pre className="code-snippet">{challenge.codeSnippet}</pre>
                    </div>
                </center>
                <div className="score">
                    <p className='white'>Desafio {currentChallengeIndex + 1} de {codeChallenges.length}</p>
                </div>

                {/* Exibe o timer no canto superior direito */}
                <div className="timer white" style={{ position: 'absolute', top: 120, right: 30, fontSize: '20px' }}>
                    {timeLeft} segundos
                </div>

                {/* Exibe os tokens no canto superior esquerdo */}
                <div className="tokens white" style={{ position: 'absolute', top: 120, left: 30, fontSize: '20px', }}>
                    <img src={tokensI} className='tokensImag'></img>
                    Tokens: <strong>{tokens}</strong>
                </div>


                <center>
                    <textarea
                        value={userCode}
                        onChange={handleCodeChange}
                        placeholder="Digite seu código aqui"
                        rows="6"
                        cols="50"
                    />
                    <br />
                    <button
                        className="buttonok"
                        onClick={handleSubmitCode}
                        style={{ backgroundColor: isAnswerCorrect === null ? '' : isAnswerCorrect ? 'green' : 'red' }} // Muda a cor para verde ou vermelho
                    >
                        {isAnswerCorrect === null ? 'Submeter Código' : isAnswerCorrect ? 'Resposta Correta' : 'Resposta Errada'}
                    </button>
                </center>
            </div>
        </div>
    );
}

export default Iteracao;
