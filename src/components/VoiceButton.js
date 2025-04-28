// src/components/VoiceButton.js
import React from 'react';
import { useCalculator } from '../context/CalculatorContext';
import './VoiceButton.css';

const VoiceButton = () => {
  const { handleButtonPress } = useCalculator();

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Sorry, your browser does not support Speech Recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const voiceInput = event.results[0][0].transcript;
      console.log('Voice input:', voiceInput);

      // Convert words to operators
      const parsedInput = voiceInput
        .toLowerCase()
        .replace(/plus/g, '+')
        .replace(/minus/g, '-')
        .replace(/times|into/g, '*')
        .replace(/divide|divided by/g, '/')
        .replace(/power|to the power of/g, '^')
        .replace(/equals|equal to/g, '=')
        .replace(/percent/g, '%')
        .replace(/open bracket/g, '(')
        .replace(/close bracket/g, ')')
        .replace(/pi/g, 'π')
        .replace(/e/g, 'e')
        .replace(/sine/g, 'sin')
        .replace(/cosine/g, 'cos')
        .replace(/tangent/g, 'tan')
        .replace(/square root/g, '√');

      console.log('Parsed Input:', parsedInput);

      // Simulate typing the parsed expression
      for (let char of parsedInput) {
        if (char === '=') {
          handleButtonPress('=');
        } else {
          handleButtonPress(char);
        }
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      alert('Voice Recognition Error: ' + event.error);
    };
  };

  return (
    <button className="voice-button" onClick={startListening}>
      🎤 Speak
    </button>
  );
};

export default VoiceButton;
