// src/components/CalculatorApp.js
import React, { useEffect } from 'react';
import { useCalculator } from '../context/CalculatorContext';
import ThemeToggle from './ThemeToggle';
import Display from './Display';
import Keypad from './Keypad';
import History from './History';
import AngleToggle from './AngleToggle';

const CalculatorApp = () => {
  const { handleButtonPress } = useCalculator();

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
  
      if (key === 'Enter') {
        event.preventDefault(); // Stop default browser behavior
        handleButtonPress('=');
      } else if (key === 'Backspace') {
        event.preventDefault();
        handleButtonPress('⌫');
      } else if ('0123456789'.includes(key)) {
        handleButtonPress(key);
      } else if ('+-*/%^().'.includes(key)) {
        handleButtonPress(key);
      }
    };
  
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleButtonPress]);

  return (
    <div className="App">
      <h1>Scientific Calculator Clone</h1>
      <ThemeToggle />
      <AngleToggle />
      <Display />
      <Keypad />
      <History />
    </div>
  );
};

export default CalculatorApp;
