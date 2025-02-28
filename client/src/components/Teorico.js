import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/edcation3.png";
import profile from "./images/profile.png";

const lessons = [
    {
        title: "Desbravando a Pirâmide Blockchain",
        content: "Imagine que você está escalando uma montanha. A cada camada que você sobe, você encontra uma vista diferente e uma nova perspectiva sobre como o mundo da blockchain funciona. A base sólida, a parte mais desafiante, as trilhas rápidas, as vistas deslumbrantes... todas essas camadas têm um papel crucial no ecossistema blockchain. Vamos explorar como elas se conectam e como Arbitrum se encaixa nesse cenário!",
    },
    {
        title: "O que são as Camadas da Blockchain?",
        content: "As camadas da blockchain são diferentes níveis de operação que ajudam a resolver problemas de escalabilidade, custo e velocidade. Elas criam uma rede eficiente onde as transações podem ser processadas de forma rápida e segura.",
    },
    {
        title: "Camada 0 (L0): A Base da Interoperabilidade",
        content: "A camada L0 fornece a infraestrutura que conecta diferentes blockchains. São protocolos como Polkadot e Cosmos, que permitem a comunicação entre diferentes redes e ajudam a criar um ecossistema interconectado.",
    },
    {
        title: "Camada 1 (L1): A Fundação da Blockchain",
        content: "L1 é a base de uma blockchain, como o Ethereum ou o Bitcoin. Aqui, as transações são processadas, e a segurança e descentralização são garantidas. No entanto, essa camada pode ter limitações de escalabilidade, o que pode gerar custos mais altos e transações mais lentas.",
    },
    {
        title: "Camada 2 (L2): A Solução de Escalabilidade",
        content: "Arbitrum é uma solução L2 que se integra ao Ethereum para melhorar a escalabilidade e reduzir custos. Usando a tecnologia de Rollups, Arbitrum processa transações de forma mais eficiente e barata, sem comprometer a segurança e a descentralização do Ethereum.",
    },
    {
        title: "Camada 3 (L3): Aplicações Descentralizadas (DApps)",
        content: "As DApps são construídas sobre as camadas L1 e L2. Elas são as interfaces que os usuários finais interagem diretamente, como exchanges descentralizadas, jogos e plataformas financeiras.",
    },
    {
        title: "Camada de Aplicações (App): A Experiência do Usuário Final",
        content: "Aqui estão os aplicativos e interfaces com os quais os usuários interagem. Esses serviços e produtos descentralizados aproveitam as camadas de baixo para fornecer experiências rápidas e seguras, como carteiras, jogos DeFi e muito mais.",
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
