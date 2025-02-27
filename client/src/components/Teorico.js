import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

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
const[selectedLesson, setSelectedLesson] = useState(null);

class Lessons extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Lista de Lições</h1>
                <div className="lessons-container">
                    <div className="sections">
                        {lessonsData.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="section">
                                <h2 className="section-title">{section.section}</h2>
                                <ul className="lesson-list">
                                    {section.lessons.map((lesson, lessonIndex) => (
                                        <li
                                            key={lessonIndex}
                                            className="lesson-item"
                                            onClick={() => setSelectedLesson(lesson)}
                                        >
                                            {lesson.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Exibe o conteúdo da lição selecionada */}
                    <div className="lesson-content">
                        {selectedLesson ? (
                            <>
                                <h2>{selectedLesson.title}</h2>
                                <p>{selectedLesson.content}</p>
                            </>
                        ) : (
                            <p>Selecione uma lição para ver o conteúdo.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Lessons;