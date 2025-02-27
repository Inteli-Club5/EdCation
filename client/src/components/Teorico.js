import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/edcation3.png";
import profile from "./images/profile.png";

const lessons = [
    {
        title: "Introdução a Arbitrum",
        content: "O Arbitrum é uma tecnologia que torna as transações na rede Ethereum mais rápidas e baratas...",
    },
    {
        title: "O que é Arbitrum?",
        content: "O Arbitrum é uma solução de escalabilidade de segunda camada para o Ethereum...",
    },
    {
        title: "Como funciona?",
        content: "Arbitrum utiliza uma tecnologia chamada Rollups, que processa transações fora da cadeia principal...",
    },
    {
        title: "Benefícios do Arbitrum",
        content: "- Taxas de transação mais baixas em comparação ao Ethereum principal.\n- Maior velocidade no processamento de operações...",
    }
];

const Lessons = () => {
    const [currentLesson, setCurrentLesson] = useState(0);
    const navigate = useNavigate();

    const nextLesson = () => {
        if (currentLesson < lessons.length - 1) {
            setCurrentLesson(currentLesson + 1);
        } else {
            navigate("/quiz"); // Redireciona para a próxima página
        }
    };
    const prevLesson = () => {
        if (currentLesson > 0) {
            setCurrentLesson(currentLesson - 1);
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
            <div className="div-center">
                <div className="video-container">
                    <iframe
                        width="100%"
                        height="400px"
                        src="https://www.youtube.com/embed/e2bJIReMacA"
                        title="Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="lessons-card">
                    <h1 className="titulo1">{lessons[currentLesson].title}</h1>
                    <p className="textT2">{lessons[currentLesson].content}</p>
                    <div className="div-buttonsL">
                        <button className="prev-button" onClick={prevLesson} disabled={currentLesson === 0}>Anterior</button>
                        <button className="next-button" onClick={nextLesson}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lessons;
