// src/components/Keypad.js
import React from 'react';
import { numberButtons, operationButtons, scientificButtons, specialButtons } from '../constants/buttons';
import Button from './Button';
import './Keypad.css';

const Keypad = ({ onButtonClick }) => {
  return (
    <div className="keypad-container">
      <div className="special-buttons">
        {specialButtons.map((btn, idx) => (
          <Button key={idx} label={btn} onClick={onButtonClick} />
        ))}
      </div>
      <div className="keypad-main">
        <div className="numbers">
          {numberButtons.map((btn, idx) => (
            <Button key={idx} label={btn} onClick={onButtonClick} />
          ))}
        </div>
        <div className="operations">
          {operationButtons.map((btn, idx) => (
            <Button key={idx} label={btn} onClick={onButtonClick} />
          ))}
        </div>
        <div className="scientific">
          {scientificButtons.map((btn, idx) => (
            <Button key={idx} label={btn} onClick={onButtonClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keypad;
