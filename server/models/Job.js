const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
