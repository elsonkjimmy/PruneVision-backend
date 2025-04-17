const express = require('express');
const cors = require('cors');
const predictRoute = require('./routes/predict');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/gradcam', express.static('gradcam'));

app.use('/api/predict', predictRoute);

module.exports = app;
