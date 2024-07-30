// routes/dataRoutes.js
const express = require('express');

const {
    createFamilyDetails,
    getAllFamilyDetails,
    createEduDetails,
    getAllEduDetails,
    createPreferences,
    getAllPreferences,
    createPersonalDetails,
    getAllPersonalDetails
} = require('../controllers/dataControllers');

const router = express.Router();

const authMiddleware = require('../middlewares/authDataMiddleware');

router.post('/personal_details', authMiddleware , createPersonalDetails);
router.post('/family_details', authMiddleware, createFamilyDetails);
router.post('/edu_details', authMiddleware, createEduDetails);
router.post('/preferences', authMiddleware, createPreferences);



router.get('/personal_details_get', getAllPersonalDetails);
router.get('/family_details_get', getAllFamilyDetails);
router.get('/edu_details_get', getAllEduDetails);
router.get('/preferences_get', getAllPreferences);

module.exports = router;
