const express = require("express");
const mongoose = require("mongoose")
const app = express();
const router = require("./routes/users")
const cors = require('cors')
const port = 5000;

app.use(cors())
//Mdsiddlewares 
app.use(express.json())
app.use("/users",router);//localhost:5000/boooks

 mongoose.connect("mongodb+srv://marcobase:0Hay2R0kKj6l7sor@cluster0.5hqhz.mongodb.net/marcodb").then(()=>console.log("Database connected"))
app.use("/api",router);
app.get("/",(req,res)=>{
    res.send("hi");
    
})
app.all("*",(req,res)=>res.send("That routes does not exist"))

app.listen(port,()=>console.log(`Server is listening on port 5000`))