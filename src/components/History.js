import React from 'react';
import { useCalculator } from '../context/CalculatorContext';
import './History.css';

const History = () => {
  const { history } = useCalculator();

  if (history.length === 0) return null;

  return (
    <div className="history-container">
      <h3>History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <div className="history-expression">{item.expression}</div>
            <div className="history-result">= {item.result}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
