// controllers/healthController.js
const HealthRecord = require('../models/healthRecord');

// Create a new health record
const createRecord = async (req, res) => {
  const { bodyTemperature, bloodPressure, heartRate } = req.body;

  try {
    const healthRecord = new HealthRecord({
      user: req.user.id,
      bodyTemperature,
      bloodPressure,
      heartRate,
    });

    await healthRecord.save();
    res.status(201).json({
      success:true,
      message:"user health record created",
      healthRecord
    });
  } catch (error) {
    console.log(error.message())
    res.status(400).json({ message: error.message });
  }
};

// Get all health records of the authenticated user
const getRecords = async (req, res) => {
  try {
    const healthRecords = await HealthRecord.find({ user: req.user.id });
    res.json({
      success:true,
      message:"all  health records",
      healthRecords
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific health record by its ID
const getRecordById = async (req, res) => {
  try {
    const healthRecord = await HealthRecord.findOne({ _id: req.params.id, user: req.user.id });

    if (!healthRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.json(healthRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a health record
const updateRecord = async (req, res) => {
  const { bodyTemperature, bloodPressure, heartRate } = req.body;

  try {
    const healthRecord = await HealthRecord.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { bodyTemperature, bloodPressure, heartRate },
      { new: true }
    );

    if (!healthRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.json(healthRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a health record
const deleteRecord = async (req, res) => {
  try {
    const healthRecord = await HealthRecord.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!healthRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.status(200).json({ message: 'Record deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRecord, getRecords, getRecordById, updateRecord, deleteRecord };
