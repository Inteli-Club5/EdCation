import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import arbitrum from './images/arbitrumsemfundo.png';
import tokensI from './images/tokens.png';

const questions = [
    {
        question: "Qual camada da blockchain é responsável por garantir que diferentes redes se conectem?",
        options: ["L0", "L1", "L2", "Dapp"],
        answer: "L0"
    },
    {
        question: "Arbitrum resolve o problema de qual aspecto da blockchain?",
        options: ["Escalabilidade", "Descentralização", "Privacidade", "Consenso"],
        answer: "Escalabilidade"
    },
    {
        question: "Qual camada da blockchain é onde as transações são registradas e a segurança é garantida?",
        options: ["L0", "L1", "L2", "L3"],
        answer: "L1"
    },
    {
        question: "Como Arbitrum ajuda a reduzir os custos de transação no Ethereum?",
        options: ["Aumentando o tamanho de cada bloco de transação", "Utilizando Rollups para processar transações mais rapidamente e com menos custo", "Centralizando as validações de transações", "Descentralizando a rede Ethereum"],
        answer: "Utilizando Rollups para processar transações mais rapidamente e com menos custo"
    },
    {
        question: "As DApps são criadas em qual camada da blockchain?",
        options: ["L0", "L1", "L2", "L3"],
        answer: "L1"
    },
];

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60); // Inicia com 60 segundos
    const [tokens, setTokens] = useState(0); // Estado para os tokens

    const question = questions[currentQuestionIndex];
    const navigate = useNavigate();  // Usando o hook useNavigate

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer); // Limpa o timer quando o componente for desmontado
        } else {
            // Avança para a próxima pergunta quando o tempo acabar
            setTimeout(() => {
                handleNextQuestion();
            }, 1000);
        }
    }, [timeLeft]);

    const handleAnswerClick = (option) => {
        setSelectedAnswer(option);
        if (option === question.answer) {
            setIsAnswerCorrect(true);
            setTokens((prevTokens) => {
                const newTokens = prevTokens + 5;
                localStorage.setItem('tokens', newTokens); // Salva os tokens no localStorage
                return newTokens;
            });
        } else {
            setIsAnswerCorrect(false);
        }

        // Move to next question after 1 second
        setTimeout(() => {
            handleNextQuestion();
        }, 1000);
    };


    const handleNextQuestion = () => {
        setIsAnswerCorrect(null);
        setSelectedAnswer(null);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(60); // Reseta o tempo para 60 segundos a cada nova pergunta
        } else {
            navigate('/iteracao')
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
                <div className="question-container">
                    <h2 className='tituloQuestion white'>{question.question}</h2>
                </div>

                <div className="score">
                    <p className='white'>Pergunta {currentQuestionIndex + 1} de {questions.length}</p>
                </div>

                <div className="options-container">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className={`option-button ${selectedAnswer === option ? (isAnswerCorrect ? 'correct' : 'incorrect') : ''}`}
                            onClick={() => handleAnswerClick(option)}
                            disabled={selectedAnswer !== null}
                        >
                            {option}
                        </button>
                    ))}
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
            </div>
        </div>
    );
}

export default Quiz;
