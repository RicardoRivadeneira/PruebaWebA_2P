// App.jsx

import React, { useState, useEffect } from 'react';
import QuestionForm from './components/QuestionForm';
import './App.css'; // Importa tu archivo CSS

const App = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [newEvaluation, setNewEvaluation] = useState({
    subject: '',
    questions: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const evaluationsResponse = await fetch('http://localhost:3001/evaluations');
      if (!evaluationsResponse.ok) {
        throw new Error('Error al obtener las evaluaciones.');
      }

      const evaluationsData = await evaluationsResponse.json();
      setEvaluations(evaluationsData);
    } catch (error) {
      console.error('Error al cargar datos:', error.message);
    }
  };

  const handleAddEvaluation = async () => {
    try {
      const response = await fetch('http://localhost:3001/evaluations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvaluation),
      });

      if (response.ok) {
        const updatedEvaluations = await response.json();
        setEvaluations(updatedEvaluations);
        setNewEvaluation({ subject: '', questions: [] });
      } else {
        throw new Error('Error al enviar la solicitud para agregar la evaluación.');
      }
    } catch (error) {
      console.error('Error al agregar la evaluación:', error.message);
    }
  };

  const handleQuestionSubmit = (question) => {
    setNewEvaluation((prevEvaluation) => ({
      ...prevEvaluation,
      questions: [...prevEvaluation.questions, question],
    }));
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Lista de Evaluaciones</h1>
      </header>

      <section className="evaluations-list">
        {evaluations.map((evaluation) => (
          <div key={evaluation.id} className="evaluation-item">
            <h2>{`Evaluación ${evaluation.id} - Materia: ${evaluation.subject}`}</h2>
            <ul>
              {evaluation.questions.map((question, questionIndex) => (
                <li key={questionIndex}>
                  <strong>Pregunta {questionIndex + 1}:</strong> {question.questionText}
                  <ul>
                    {question.options.map((option, optionIndex) => (
                      <li key={optionIndex}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="new-evaluation-form">
        <h2>Agregar Nueva Evaluación</h2>
        <label>
          Materia:
          <input
            type="text"
            value={newEvaluation.subject}
            onChange={(e) => setNewEvaluation({ ...newEvaluation, subject: e.target.value })}
            style={{ backgroundColor: '#fff', color: '#000' }}
          />
        </label>
        <QuestionForm onQuestionSubmit={handleQuestionSubmit} />
        <button
          onClick={handleAddEvaluation}
          className="green-button" // Clase para estilizar el botón
        >
          Agregar Evaluación
        </button>
      </section>

      <section className="new-evaluation-preview">
        <h2>Vista Previa de la o las Preguntas Recién Ingresadas</h2>
        <ul>
          {newEvaluation.questions.map((question, questionIndex) => (
            <li key={questionIndex}>
              <strong>Pregunta {questionIndex + 1}:</strong> {question.questionText}
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;