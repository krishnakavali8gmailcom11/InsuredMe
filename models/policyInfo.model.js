const mongoose = require('mongoose');

const policyInfoSchema = new mongoose.Schema({
  policyNumber: String,
  policyStartDate: Date,
  policyEndDate: Date,
  policyCategory: String,
  collectionId: String,
  companyCollectionId: String,
  userId: String,
});

const PolicyInfo = mongoose.model('PolicyInfo', policyInfoSchema);

module.exports = PolicyInfo;
