const express = require("express");
const { getReports, createReport } = require("../controller/report.js");
const { getUsers,createUser,getUser ,deleteUser,updateUser} =require( "../controller/users.js");
const { create } = require("../models/Report.js");
const router = express.Router();


router.post("/user",createUser)
router.get("/users",getUsers)
router.delete("/user/:id",deleteUser)
router.get("/reports",getReports)
router.post("/report",createReport)


module.exports = router;