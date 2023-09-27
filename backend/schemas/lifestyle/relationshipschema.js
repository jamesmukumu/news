const mongoose = require('mongoose')
const Healthnews = require('./healthschema')
const moment = require('moment-timezone')
const RelationshipnewsSchema = new mongoose.Schema({
Image:{type:[String,Number],required:true},
Imagetitle:{type:[String,Number],required:true},
pageHeader:{type:[String,Number],required:true},
datePosted:{type:String,default:moment.tz('Africa/Nairobi').toDate()},
news:{type:[String,Number],required:true},
healthnews:{type:mongoose.Schema.Types.ObjectId,ref:'Health',required:false}

})

const Relationship = mongoose.model('Relationship',RelationshipnewsSchema)

module.exports = Relationship