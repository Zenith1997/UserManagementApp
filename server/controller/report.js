const report =require ("../models/Report");

const getReports = async(req,res,next) =>{
    let user;
    try{
        user = await report.find();
    }catch(err){
        console.log(err);
    }
    if(!user){
        res.status(400).json({message:"No users found"})
    }
    return res.status(200).json({user})
}

const createReport =async(req,res,next) =>{
   const {empid,workdays,leaves,OT} = req.body
    let user;
    try{
        user = new report({
            empid,
            workdays,
            leaves,
            OT,
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
exports.getReports=getReports
exports.createReport=createReport
