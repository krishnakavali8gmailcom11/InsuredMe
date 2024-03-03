const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messege.controllers');

router.post('/schedule_message', async (req, res) => {
  try {
    const { message, day, time } = req.body;
    // Adjust this route to handle scheduling messages
    await messageController.insertMessageIntoDB(message);
    res.json({ success: true, message: 'Message scheduled successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
