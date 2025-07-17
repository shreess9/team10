import React from 'react';
import CameraFeed from './components/CameraFeed';
import VoiceCommand from './components/VoiceCommand';
import './App.scss';

function App() {
  return (
    <div className="app">
      <h1>🧠 Vision + Voice Assistant MVP</h1>
      <div className="mvp-container">
        <CameraFeed />
        <VoiceCommand />
      </div>
    </div>
  );
}

export default App;
