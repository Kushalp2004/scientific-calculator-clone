import React from 'react';
import { useCalculator } from '../context/CalculatorContext';
import './Button.css';

const Button = ({ label }) => {
  const { handleButtonPress } = useCalculator();

  return (
    <button className="calc-button" onClick={() => handleButtonPress(label)}>
      {label}
    </button>
  );
};

export default Button;
