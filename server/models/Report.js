const mongoose = require("mongoose");
const Schema = mongoose.Schema

const reportSchema = new Schema({
    empid:{
        type:String,
        required:true
    },
    workdays:{
        type:Number,
        required:true
    },
    leaves:{
        type:Number,
        required:true
    },
    OT:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Attendence report",reportSchema)