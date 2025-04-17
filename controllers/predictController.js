const path = require('path');

exports.predictImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Aucune image reçue' });
  }

  // Pour l’instant, on simule une prédiction
  const label = 'Prune tachetée';
  const confidence = 0.92;
  const gradcamImage = 'http://localhost:3000/gradcam/sample-gradcam.jpg';

  return res.json({
    label,
    confidence,
    gradcamImage,
  });
};
