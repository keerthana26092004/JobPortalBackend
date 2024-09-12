const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminController");
const auth = require("../middlewares/auth");
const adminMiddleware = require("../middlewares/adminMiddleware");


router.post('/createjobs', auth , adminMiddleware ,adminControllers.createJob);
router.get('/jobs', auth, adminMiddleware, adminControllers.getAllJobs);
router.get('/jobs/:id', auth, adminMiddleware, adminControllers.getJobById);
router.put('/jobs/:id', auth, adminMiddleware, adminControllers.updateJob);



module.exports = router;
