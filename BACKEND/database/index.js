const mongoose = require('mongoose');

const connectionString = '';

const dbConnect = async () => {
    try {

     const conn =    await mongoose.connect(connectionString);
     console.log(`database connected to host: ${conn.connection.host}`);

    } catch (error) {
console.log(`Error: ${error}`);
    }
}

module.exports = dbConnect;