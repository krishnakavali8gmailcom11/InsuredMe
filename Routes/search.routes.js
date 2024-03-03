const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search.controllers');

router.get('/search_policy/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const result = await searchController.searchPolicyByUsername(username);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/aggregated_policy', async (req, res) => {
  try {
    const result = await searchController.aggregatePolicy();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
