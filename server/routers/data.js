// routes/dataRoutes.js
const express = require('express');

const {
    createFamilyDetails,
    getAllFamilyDetails,
    getAllEduDetails,
    getAllPreferences,
    createPersonalDetails,
    getAllPersonalDetails
} = require('../controllers/dataControllers');

const router = express.Router();

const authMiddleware = require('../middlewares/authDataMiddleware');
const { updateEduDetails } = require('../controllers/dataControllers');

router.post('/edu_details', updateEduDetails);
router.post('/personal_details', authMiddleware , createPersonalDetails);
router.post('/family_details', authMiddleware, createFamilyDetails);



router.get('/personal_details_get/:userId', getAllPersonalDetails);
router.get('/family_details_get', getAllFamilyDetails);
router.get('/edu_details_get', getAllEduDetails);
router.get('/preferences_get', getAllPreferences);

module.exports = router;
