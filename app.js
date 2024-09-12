const express = require("express");
const app =express();
const userRoutes= require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");
const adminRoutes = require("./routes/adminRoutes");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const applicationRoutes = require("./routes/applicationRoutes")
const adminUserRoutes = require("./routes/adminUserRoutes")



mongoose.connect("mongodb+srv://keerthanaravikumar188:keerthu123@cluster0.wfcwchf.mongodb.net/job_board?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("mongodb connected")}
);
app.use(cors())
app.set("view engine" , "ejs");
app.use(bodyparser.json());
app.use('/' , userRoutes);
app.use('/' , adminRoutes)
app.use('/' , jobRoutes);
app.use('/' , applicationRoutes);
app.use('/' , adminUserRoutes)







app.listen(5000 , ()=>{
    console.log("Server is running on port 5000");
})
