// src/components/Display.js
import React from 'react';
import { useCalculator } from '../context/CalculatorContext';
import './Display.css';

const Display = () => {
  const { expression, result, memory } = useCalculator();

  return (
    <div className="display-container">
      {memory !== 0 && (
        <div className="memory">
          Memory: {memory}
        </div>
      )}
      <div className="expression">{expression || '0'}</div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Display;
