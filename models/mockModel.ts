//import { PredictionResponse } from '../types/prediction';

interface MockPrediction {
  label: string;
  confidence: number;
  gradCam: string;
  inferenceTime: number;
}

export const predict = async (imageBuffer: Buffer): Promise<MockPrediction> => {
  const labels = [
    "prune tachetée", 
    "pomme golden", 
    "tomate cerise",
    "rose rouge",
    "feuille de chêne"
  ];
  
  const randomLabel = labels[Math.floor(Math.random() * labels.length)];
  const randomConfidence = parseFloat((Math.random() * 30 + 70).toFixed(1));
  
  return {
    label: randomLabel,
    confidence: randomConfidence,
    gradCam: generateMockGradCam(),
    inferenceTime: Math.floor(Math.random() * 200 + 100)
  };
};

function generateMockGradCam(): string {
  const mockImages = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
  ];
  return mockImages[Math.floor(Math.random() * mockImages.length)];
}