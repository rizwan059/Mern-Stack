const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://fsdevveloper:riz_3505@cluster0.v01pi.mongodb.net/kinz-closet?retryWrites=true&w=majority&appName=Cluster0';

const dbConnect = async () => {
    try {

     const conn =    await mongoose.connect(connectionString);
     console.log(`database connected to host: ${conn.connection.host}`);

    } catch (error) {
console.log(`Error: ${error}`);
    }
}

module.exports = dbConnect;