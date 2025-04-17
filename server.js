const express = require('express');
const cors = require('cors');
const predictRoute = require('./routes/predict');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // pour accéder aux images
app.use('/gradcam', express.static('gradcam')); // pour simuler les images Grad-CAM

app.use('/predict', predictRoute);

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
