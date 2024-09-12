const jobController = require("../controllers/jobController");
const express= require("express");
const Router = express.Router();
const auth = require("../middlewares/auth");

Router.post("/applyjob" ,auth, jobController.applyForJob);
Router.get("/getjob" ,auth , jobController.getApplications);
Router.get("/getjob/:id" ,auth, jobController.getApplicationById);
Router.put("/update/:id" , auth,jobController.getApplicationById);
Router.delete("/delete/:id" ,auth, jobController.getApplicationById);
Router.get("/getAllJobs" , jobController.getAllJobs);

module.exports = Router;
