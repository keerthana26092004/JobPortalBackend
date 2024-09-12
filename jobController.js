const Application= require("../models/applicationModel");
const Job = require("../models/jobModel");
const User = require("../models/userModel");
const { v4: uuidv4 } = require('uuid');

const  applyForJob = async (req, res) => {
  try {
    const { jobId, resume, coverLetter } = req.body;
    const userId = req.user.id;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    const newApplication = new Application({
      id: uuidv4(),
      userId,
      resume,
      coverLetter,
    });

    const application = await newApplication.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getApplications = async (req, res) => {
  try {
    const userId = req.user.id;
    const applications = await Application.find({ userId }).populate('jobId');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findById(id).populate('jobId');
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { resume, coverLetter, status } = req.body;

    let application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    application.resume = resume || application.resume;
    application.coverLetter = coverLetter || application.coverLetter;
    application.status = status || application.status;

    application = await application.save();
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const withdrawApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    await application.remove();
    res.json({ message: 'Application withdrawn successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); 
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



module.exports={applyForJob ,getApplications,getApplicationById,updateApplication,withdrawApplication , getAllJobs}
