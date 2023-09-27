const mongoose = require('mongoose')
const Football = require('./footballschema')
const moment = require('moment-timezone')
const AthleticSchema = new mongoose.Schema({
Image:{type:[String,Number],required:true},
Imagetitle:{type:[String,Number],required:true},
pageHeader:{type:[String,Number],required:true},
datePosted:{type:String,default:moment.tz('Africa/Nairobi').toDate()},
news:{type:[String,Number],required:true},
footballnews:{type:mongoose.Schema.Types.ObjectId,ref:'Football',required:false}

})

const Athletic = mongoose.model('Athletic',AthleticSchema)

module.exports = Athletic