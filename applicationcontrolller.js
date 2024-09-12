const JobApplication = require('../models/applicationModel');


const applyJobs = async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        password,
        coverLetter,
        portfolio,
        references,
        certifications,
        firstName,
        lastName,
        address,
        availability,
        additionalNotes,
        role
      } = req.body;
      
  
      const resume = req.file ? req.file.path : "";
      const application = new JobApplication({
        name,
        email,
        password,
        phone,
        resume,
        coverLetter,
        portfolio,
        references,
        certifications,
        firstName,
        lastName,
        address,
        availability,
        additionalNotes,
        role
      });
  
      await application.save();
      res.status(201).json({ message: 'Application submitted successfully', data: application });
    } catch (error) {
     
      res.status(400).json({ message: 'Failed to submit application', error: error.message });
    }
  };
  

module.exports = { applyJobs };
