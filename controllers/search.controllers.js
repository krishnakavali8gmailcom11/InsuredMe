const PolicyInfo = require('../models/policyInfo.model');

const searchPolicyByUsername = async (username) => {
  try {
    const policyInfo = await PolicyInfo.find({ accountName: username });
    return { success: true, policyInfo };
  } catch (error) {
    console.error(error);
    throw { success: false, error: 'Internal server error' };
  }
};

const aggregatePolicy = async () => {
  try {
    const aggregatedPolicy = await PolicyInfo.aggregate([
      { $group: { _id: '$userId', count: { $sum: 1 } } },
    ]);
    return { success: true, aggregatedPolicy };
  } catch (error) {
    console.error(error);
    throw { success: false, error: 'Internal server error' };
  }
};

module.exports = { searchPolicyByUsername, aggregatePolicy };
