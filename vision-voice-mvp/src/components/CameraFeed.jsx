import React, { useRef, useEffect } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const CameraFeed = () => {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModel = async () => {
      const model = await cocoSsd.load();
      detectFrame(videoRef.current, model);
    };

    const detectFrame = (video, model) => {
      model.detect(video).then(predictions => {
        drawPredictions(predictions);
        requestAnimationFrame(() => detectFrame(video, model));
      });
    };

    const drawPredictions = (predictions) => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      predictions.forEach(pred => {
        ctx.beginPath();
        ctx.rect(...pred.bbox);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'green';
        ctx.fillStyle = 'green';
        ctx.stroke();
        ctx.fillText(pred.class, pred.bbox[0], pred.bbox[1] > 10 ? pred.bbox[1] - 5 : 10);
      });
    };

    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      videoRef.current.srcObject = stream;
    });

    loadModel();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" />
    </div>
  );
};

export default CameraFeed;
