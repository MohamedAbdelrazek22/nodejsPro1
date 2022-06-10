const   mongoose  = require("mongoose");


const dbconnection= ()=>{
    mongoose.connect(process.env.connection_string)
}

module.exports = {dbconnection}
