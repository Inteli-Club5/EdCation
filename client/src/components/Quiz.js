import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import arbitrum from './images/arbitrumsemfundo.png';
import tokensI from './images/tokens.png';

const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é a maior montanha do mundo?",
        options: ["Monte Everest", "K2", "Montanha Kilimanjaro", "Montanha Fuji"],
        answer: "Monte Everest"
    },
    {
        question: "Quantos continentes existem?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    }
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
            setTokens((prevTokens) => prevTokens + 5); // Adiciona 5 tokens se a resposta estiver correta
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
            navigate('/recompensa')
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
            <div className="quiz-container">
                <img src={arbitrum} className="track-icon-3"/>
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
                <div className="timer white" style={{ position: 'absolute', top: 100, right: 30, fontSize: '20px' }}>
                    {timeLeft} segundos
                </div>

                {/* Exibe os tokens no canto superior esquerdo */}
                <div className="tokens white" style={{ position: 'absolute', top: 100, left: 30, fontSize: '20px',}}>
                    <img src={tokensI} className='tokensImag'></img>
                     Tokens: <strong>{tokens}</strong>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
