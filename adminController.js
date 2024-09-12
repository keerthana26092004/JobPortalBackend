const Job = require("../models/jobModel");
const Application = require('../models/applicationModel');
const User = require('../models/userModel');


const createJob = async (req, res) => {
  try {
    const { title, company, salary, location, description, category, image } = req.body;

    
    if (!title || !company || !salary || !location || !description || !category || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

   
    const newJob = new Job({
      title,
      company,
      salary,
      location,
      description,
      category,
      image,
    });

    
    await newJob.save();

    
    res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Server error' });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, requirements, company, location, salary } = req.body;

    let job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    job.title = title || job.title;
    job.description = description || job.description;
    job.requirements = requirements || job.requirements;
    job.company = company || job.company;
    job.location = location || job.location;
    job.salary = salary || job.salary;

    job = await job.save();
    res.status(201).json(job)
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const { name, email, role } = req.body;
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.name = name || user.name;
        user.email = email || user.email;
        user.role = role || user.role;
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(201).json({ message: 'User deleted' });
    } catch (err) {
        res.status(400).json({ message: 'Server error' });
    }
};

module.exports = {
    getUsers,
    updateUser,
    deleteUser,createJob,getAllJobs,getJobById,updateJob,
};


    



