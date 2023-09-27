const mongoose = require('mongoose')
const Globalnews = require('./globalschema')
const moment = require('moment-timezone')
const localnewsSchema = new mongoose.Schema({
Image:{type:[String,Number],required:true},
Imagetitle:{type:[String,Number],required:true},
pageHeader:{type:[String,Number],required:true},
datePosted:{type:String,default:moment.tz('Africa/Nairobi').toDate()},
news:{type:[String,Number],required:true},
globalnews:{type:mongoose.Schema.Types.ObjectId,ref:'Globalnews',required:false}

})

const Local = mongoose.model('Local',localnewsSchema)

module.exports = Local