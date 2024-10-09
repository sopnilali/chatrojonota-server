const mongoose = require("mongoose");
require('dotenv').config()


const getConnectionString = ()=>{

    let connectionURL

    if(process.env.NODE_ENV === 'development'){
        connectionURL = process.env.DATABASE_LOCAL
    }
    else{
        connectionURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.35itrev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; 
    }
    return connectionURL
}

const connectDB = async () => {
    console.log("connecting to database");
    const uri = getConnectionString();
    await mongoose.connect(uri, {dbName: process.env.DB_NAME})
    console.log("connected to database");
}

module.exports = connectDB;