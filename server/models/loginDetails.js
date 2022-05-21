const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const loginDetailsSchema = new Schema({
    time:{
        type:String,
        required:true
    },
     login:{
        type:String,
        required:true
    },
    device:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model("Logindetails",loginDetailsSchema)