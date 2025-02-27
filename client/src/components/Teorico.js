import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/edcation3.png";
import profile from "./images/profile.png";

const Lessons = () => {
    const [videoUrl, setVideoUrl] = useState("");

    const lessonsData = [
        {
            section: "Introdução",
            lessons: [
                { title: "O que é Programação?", content: "Programação é o processo de escrever, testar e manter código-fonte de programas de computador." },
                { title: "História da Computação", content: "A computação começou com máquinas simples até evoluir para os modernos computadores de hoje." }
            ]
        },
        {
            section: "JavaScript Básico",
            lessons: [
                { title: "Variáveis e Tipos de Dados", content: "Em JavaScript, usamos var, let e const para declarar variáveis." },
                { title: "Funções", content: "As funções permitem reutilizar código e torná-lo modular." }
            ]
        },
        {
            section: "React Avançado",
            lessons: [
                { title: "Hooks", content: "Os hooks permitem o uso de estado e outros recursos sem escrever uma classe." },
                { title: "Context API", content: "A Context API permite compartilhar valores entre componentes sem precisar de props drilling." }
            ]
        }
    ];

    return (
        <div>
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
                    {/* Player de Vídeo */}
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
                        <h1 className="titulo1">Introdução a Arbitrum</h1>
                        <p className="textT2">O Arbitrum é uma tecnologia que torna as transações na rede Ethereum mais rápidas e baratas. Ele funciona como uma “camada extra” (Layer 2) que processa operações fora da rede principal e depois as confirma na Ethereum, garantindo segurança e eficiência.

                        Isso significa que, com o Arbitrum, você pode usar aplicativos e fazer transações gastando menos e sem esperar tanto tempo. É muito usado em finanças descentralizadas (DeFi), jogos blockchain e outros projetos que precisam de transações rápidas. 🚀</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lessons;