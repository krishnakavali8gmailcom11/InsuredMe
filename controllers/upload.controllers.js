const Agent = require('../models/agent.model');
const User = require('../models/user.model');
const UserAccount = require('../models/userAccount.model');
const LOB = require('../models/lob.model');
const Carrier = require('../models/carrier.model');
const PolicyInfo =require('../models/policyInfo.model');


const uploadData = async (data) => {
  try {
    await Promise.all([
      Agent.insertMany(data.Agent),
      User.insertMany(data.User),
      UserAccount.insertMany(data['User\'s Account']),
      LOB.insertMany(data['Policy Category(LOB)']),
      Carrier.insertMany(data['Policy Carrier']),
      PolicyInfo.insertMany(data['Policy Info']),

     
    ]);

    return { success: true, message: 'Data uploaded successfully' };
  } catch (error) {
    console.error(error);
    throw { success: false, error: 'Internal server error' };
  }
};

module.exports = { uploadData };
