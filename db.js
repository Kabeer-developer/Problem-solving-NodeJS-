const mongoose = require("mongoose");

const connectDb = async()=> {
    try{
        await mongoose.connect("mongodb://localhost:27017/practiceDB");
    } catch(error){
        console.error(error.message);
    }
}

module.exports = connectDb;