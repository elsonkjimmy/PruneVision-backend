const express = require('express');
const multer = require('multer');
const router = express.Router();
const predictController = require('../controllers/predictController');

// Configuration multer pour stocker dans "uploads/"
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.post('/', upload.single('image'), predictController.predictImage);

module.exports = router;
