// components/VoiceCommand.jsx
import React from 'react';

const VoiceCommand = ({ onTranscript }) => {
  const handleListen = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      onTranscript(text);
    };

    recognition.onerror = (e) => {
      console.error('Speech recognition error:', e);
      onTranscript('');
    };

    recognition.start();
  };

  return <button onClick={handleListen}>🎙️ Start Speaking</button>;
};

export default VoiceCommand;
