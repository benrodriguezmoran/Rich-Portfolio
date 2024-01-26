const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
    description: {
      type: String,
      required: true 
    },
    start_date: {
      type: String,
      required: true
    },
    end_date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
