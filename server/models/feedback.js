const mongoose=require('mongoose')
const Schema=mongoose.Schema

const feedbackschema=new Schema({
    
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
})

const Feedbacks=mongoose.model('feedback',feedbackschema)
module.exports=Feedbacks