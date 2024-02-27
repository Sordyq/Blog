const mongoose = require("mongoose")
const connect_String = process.env.connectionString

const connectdb = async () =>{
    await mongoose.connect(connect_String)
    return console.log("DB is a BOMB")
}

module.exports = connectdb