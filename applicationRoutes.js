const express = require('express');
const router = express.Router();
const jobApplicationController = require("../controllers/applicationcontrolller")
const upload = require("../middlewares/uploadMiddleware");


router.post('/apply',upload.single('resume'), jobApplicationController.applyJobs);


module.exports = router;
