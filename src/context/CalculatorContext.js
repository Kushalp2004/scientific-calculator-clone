// src/context/CalculatorContext.js

import React, { createContext, useContext, useState } from 'react';
import { evaluate } from 'mathjs';

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [memory, setMemory] = useState(0);
  const [angleMode, setAngleMode] = useState('DEG');
  const [history, setHistory] = useState([]);

  const handleButtonPress = (label) => {
    if (label === '=') {
      try {
        let finalExpression = expression;

        // If trigonometric functions present, adjust for degrees
        if (angleMode === 'DEG') {
          finalExpression = finalExpression
            .replace(/sin\(/g, 'sin(degToRad(')
            .replace(/cos\(/g, 'cos(degToRad(')
            .replace(/tan\(/g, 'tan(degToRad(');
        }

        const evalResult = evaluate(finalExpression, {
          degToRad: (deg) => (deg * Math.PI) / 180
        });

        setResult(evalResult.toString());
        setHistory(prev => [...prev, { expression, result: evalResult.toString() }].slice(-10));
      } catch (error) {
        setResult('Invalid Input');
      }
    } else if (label === 'C') {
      setExpression('');
      setResult('');
    } else if (label === 'CE') {
      setExpression('');
    } else if (label === '⌫') {
      setExpression(prev => prev.slice(0, -1));
    } else {
      setExpression(prev => prev + label);
    }
  };

  const handleMemory = (action) => {
    if (action === 'M+') setMemory(prev => prev + Number(result));
    if (action === 'M-') setMemory(prev => prev - Number(result));
    if (action === 'MR') setExpression(prev => prev + memory.toString());
    if (action === 'MC') setMemory(0);
  };

  const toggleAngleMode = () => {
    setAngleMode(prev => (prev === 'DEG' ? 'RAD' : 'DEG'));
  };

  return (
    <CalculatorContext.Provider
      value={{
        expression,
        result,
        memory,
        angleMode,
        history,
        handleButtonPress,
        handleMemory,
        toggleAngleMode
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);
