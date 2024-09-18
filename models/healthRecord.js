// models/HealthRecord.js
const mongoose = require('mongoose');

const HealthRecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  bodyTemperature: {
    type: Number,
    required: true,
  },
  bloodPressure: {
    type: String,
    required: true,
  },
  heartRate: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('HealthRecord', HealthRecordSchema);
