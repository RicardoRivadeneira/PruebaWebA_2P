// QuestionForm.jsx

import React, { useState } from 'react';
import './QuestionForm.css'; // Importa tu archivo CSS

const QuestionForm = ({ onQuestionSubmit }) => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['']);

  const handleAddOption = () => {
    setOptions((prevOptions) => [...prevOptions, '']);
  };

  const handleRemoveOption = (index) => {
    setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index, text) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = text;
      return updatedOptions;
    });
  };

  const handleAddQuestion = () => {
    if (questionText.trim() !== '') {
      onQuestionSubmit({ questionText, options });
      setQuestionText('');
      setOptions(['']);
    }
  };

  return (
    <div className="question-form">
      <h3>Agregar Pregunta</h3>
      <label>
        Pregunta:
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          className="text-input"
        />
      </label>
      <br />
      <label>
        Opciones:
        {options.map((option, index) => (
          <div key={index} className="option-container">
            <input
              type="text"
              placeholder={`Opción ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="text-input"
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveOption(index)}
                className="remove-option-button"
              >
                Eliminar
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddOption} className="add-option-button">
          Agregar Opción
        </button>
      </label>
      <br />
      <button onClick={handleAddQuestion} className="add-question-button">
        Agregar Pregunta
      </button>
    </div>
  );
};

export default QuestionForm;