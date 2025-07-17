import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceCommand = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>🎙️ Start Listening</button>
      <button onClick={SpeechRecognition.stopListening}>🛑 Stop</button>
      <button onClick={resetTranscript}>🔁 Reset</button>
      <p><strong>Status:</strong> {listening ? 'Listening...' : 'Stopped'}</p>
      <p><strong>You said:</strong> {transcript}</p>
    </div>
  );
};

export default VoiceCommand;
