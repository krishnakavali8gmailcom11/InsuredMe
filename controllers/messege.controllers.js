// // Add logic for message-related operations here
// const insertMessageIntoDB = async (message) => {
//     // Perform the message insertion logic here
//     // ...
  
//     console.log(`Message inserted into the database: ${message}`);
//   };
  
//   module.exports = { insertMessageIntoDB };
  
const Message = require('../models/message.model'); // Create a new model for messages

const insertMessageIntoDB = async (message) => {
  try {
    // Assume you have a model called Message with a field 'content'
    const newMessage = new Message({ content: message });
    
    // Save the message to the MongoDB collection
    await newMessage.save();

    console.log(`Message inserted into the database: ${message}`);
  } catch (error) {
    console.error(error);
    throw { success: false, error: 'Error inserting message into the database' };
  }
};

module.exports = { insertMessageIntoDB };
