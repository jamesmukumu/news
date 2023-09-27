const mongoose = require('mongoose')
const Relationship = require('./relationshipschema')
const moment = require('moment-timezone')
const healthnewsSchema = new mongoose.Schema({
Image:{type:[String,Number],required:true},
Imagetitle:{type:[String,Number],required:true},
pageHeader:{type:[String,Number],required:true},
datePosted:{type:String,default:moment.tz('Africa/Nairobi').toDate()},
news:{type:[String,Number],required:true},
relationshipnews:{type:mongoose.Schema.Types.ObjectId,ref:'Relationship',required:false}

})

const Health = mongoose.model('Health',healthnewsSchema)

module.exports = Health