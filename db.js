const mongoose = require("mongoose");

const connectDb = async()=> {
    try{
        await mongoose.connect("URL");
    } catch(error){
        console.error(error.message);
    }
}

module.exports = connectDb;