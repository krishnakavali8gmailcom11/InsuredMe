const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  agentName: String,
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
