const path = require('path');

module.exports = function mockPredict(imagePath) {
  // Simulation d’un modèle ML
  return {
    label: 'prune tachetée',
    confidence: 95,
    gradCamImage: '/gradcam/mock_gradcam.png', // Image statique simulée
  };
};
