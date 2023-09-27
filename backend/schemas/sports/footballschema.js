const mongoose = require('mongoose')
const Athletic = require('./athleticschema')
const moment = require('moment-timezone')
const footballnewsSchema = new mongoose.Schema({
Image:{type:[String,Number],required:true},
Imagetitle:{type:[String,Number],required:true},
pageHeader:{type:[String,Number],required:true},
datePosted:{type:String,default:moment.tz('Africa/Nairobi').toDate()},
news:{type:[String,Number],required:true},
Athleticnews:{type:mongoose.Schema.Types.ObjectId,ref:'Athletic',required:false}

})

const Football = mongoose.model('Football',footballnewsSchema)

module.exports = Football