const mongoose = require("mongoose")
const connectString = process.env.connection_String

const connectdb = async () =>{
    await mongoose.connect(connectString)
    return console.log("DB is a BOMB")
}

module.exports = connectdb