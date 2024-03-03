const { workerData, parentPort } = require('worker_threads');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/insurance_db', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB Models
const Agent = mongoose.model('Agent', { agentName: String });
const User = mongoose.model('User', { firstName: String, dob: Date, address: String, phoneNumber: String, state: String, zipCode: String, email: String, gender: String, userType: String });
// Define models for other entities as needed

const insertData = async (data) => {
  try {
    await Promise.all([
      Agent.insertMany(data.Agent),
      User.insertMany(data.User),
      // Insert other data into respective models
    ]);

    parentPort.postMessage('Data uploaded successfully');
  } catch (error) {
    console.error(error);
    parentPort.postMessage('Error during data upload');
  }
};

// Start data insertion process
insertData(workerData);
