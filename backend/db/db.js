const mongoose = require('mongoose')
const dotenv  = require('dotenv')
dotenv.config()


const connectionDB = process.env.connectionString
const Dbconnection = mongoose.connect(connectionDB,{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=>{

    console.log('Connected To Mongodb successfully')
})
.catch(()=>{
    console.log('error in connecting to DB')
})

module.export = Dbconnection