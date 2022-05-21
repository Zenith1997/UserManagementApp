
const loginDetails =require('../models/loginDetails');


const getUsers = async(req,res,next) =>{
    let user;
    try{
        user = await loginDetails.find();
    }catch(err){
        console.log(err);
    }
    if(!user){
        res.status(400).json({message:"No users found"})
    }
    return res.status(200).json({user})
}

const createUser =async(req,res,next) =>{
   const {time,login,device,location} = req.body
    let user;
    try{
        user = new loginDetails({
            time,
            login,
            device,
            location,
        });
        await user.save();
        console.log("User saved")
    }catch(err){
        console.log(err)
    }
    if(!user){
        return res.status(500).json({message:"Unable to Add"})
    }
    return res.status(201).json({user})
}
const deleteUser= async(req,res,next)=>{
const id = req.params.id
let user;
try{
    user = await loginDetails.findByIdAndRemove(id)
}catch(err){
    console.log(err);
}
if(!user){
    console.log("Unable to delete");
}
return res.status(200).json("User login details deleted")
}
exports.createUser =createUser
exports.getUsers=getUsers
exports.deleteUser=deleteUser
