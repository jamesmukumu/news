const mongoose = require('mongoose')
const Local = require('./localschema')
const moment = require('moment-timezone')
const globalnewsSchema = new mongoose.Schema({
Image:{type:[String,Number],required:true},
Imagetitle:{type:[String,Number],required:true},
pageHeader:{type:[String,Number],required:true},
datePosted:{type:String,default:moment.tz('Africa/Nairobi').toDate()},
news:{type:[String,Number],required:true},
localnews:{type:mongoose.Schema.Types.ObjectId,ref:'Local',required:false}

})

const Globalnews = mongoose.model('Globalnews',globalnewsSchema)

module.exports = Globalnews