const mongosse = require('mongoose');

const DB = process.env.DATABASE

const connectDB = async () =>{
    try{
        await mongosse.connect(DB)
        console.log("Database connected")
    }
    catch(err)
    {
        console.log(err)
    }
}

module.exports = connectDB;