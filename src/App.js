import React from 'react';
import { CalculatorProvider } from './context/CalculatorContext';
import CalculatorApp from './components/CalculatorApp';
import './styles/themes.css';
import './App.css';

function App() {
  return (
    <CalculatorProvider>
      <CalculatorApp />
    </CalculatorProvider>
  );
}

export default App;
