const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
firstname:{type:String,required:true},
secondname:{type:String,required:true},
email:{type:[String,Number],required:true,unique:true},
phonenumber:{type:Number,required:true},
password:{type:[String,Number],required:true},
username:{type:[String,Number],required:true}
})


const User = mongoose.model('User',userSchema)
module.exports = User  