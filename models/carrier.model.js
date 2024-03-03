const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
  company_name: String,
});

const Carrier = mongoose.model('Carrier', carrierSchema);

module.exports = Carrier;
