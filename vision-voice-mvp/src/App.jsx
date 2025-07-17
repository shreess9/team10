// App.jsx
import React, { useState } from 'react';
import './App.scss';
import CameraFeed from './components/CameraFeed';
import VoiceAssistant from './components/VoiceAssistant';

const App = () => {
  const [objects, setObjects] = useState([]);

  return (
    <div className="app-container">
      <h1 className="title">Vision & Voice AI Assistant 🤖</h1>

      <div className="main-section">
        {/* 🎥 Camera Feed */}
        <div className="camera-box">
          <CameraFeed onDetect={setObjects} />
          <div className="detected-items">
            <strong>Detected:</strong> {objects.join(', ') || 'None'}
          </div>
        </div>

        {/* 🎤 Voice Assistant */}
        <VoiceAssistant />
      </div>
    </div>
  );
};

export default App;
