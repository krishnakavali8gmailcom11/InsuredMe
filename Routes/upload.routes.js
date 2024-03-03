const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controllers');

router.post('/upload', async (req, res) => {
  try {
    const data = req.body;
    const result = await uploadController.uploadData(data);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
