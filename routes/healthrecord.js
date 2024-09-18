// routes/healthRecords.js
const express = require('express');
const { createRecord, getRecords, getRecordById, updateRecord, deleteRecord } = require('../Controllers/healthcontroller');
const auth = require('../middleware/auth');
const router = express.Router();

// CRUD routes for health records
router.post('/createRecord', auth, createRecord);
router.get('/getRecords', auth, getRecords);
router.get('/recordById/:id', auth, getRecordById);
router.put('/updateRecord/:id', auth, updateRecord);
router.delete('/deleteRecord/:id', auth, deleteRecord);

module.exports = router;
