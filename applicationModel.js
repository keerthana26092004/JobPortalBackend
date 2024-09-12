const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  resume: { type: String },
  coverletter: { type: String },
  portfolio: { type: String },
  references: { type: String },
  certifications: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String },
  availability: { type: String, required: true },
  additionalNotes: { type: String },
  role: { type: String, required: true },
}, { timestamps: true });

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;
