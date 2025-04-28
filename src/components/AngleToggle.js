// src/components/AngleToggle.js
import React from 'react';
import { useCalculator } from '../context/CalculatorContext';
import './AngleToggle.css';

const AngleToggle = () => {
  const { angleMode, toggleAngleMode } = useCalculator();

  return (
    <div className="angle-toggle">
      <button onClick={toggleAngleMode}>
        {angleMode === 'DEG' ? 'Degrees (°)' : 'Radians (rad)'}
      </button>
    </div>
  );
};

export default AngleToggle;
