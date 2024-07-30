// controllers/dataController.js
const PersonalDetails = require('../models/PersonalDetails.js');
const FamilyDetails = require('../models/FamilyDetails');
const EduDetails = require('../models/EduDetails');
const Preferences = require('../models/Preferences');


const createPersonalDetails = async (req, res) => {
    try {
        const { first_name, last_name, email, phone_no, address, city, state, postal_code, userId } = req.body;

        if (!first_name || !last_name || !email || !phone_no || !address || !city || !state || !postal_code || !userId) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newPersonalDetails = new PersonalDetails({
            userId,
            first_name,
            last_name,
            email,
            phone_no,
            address,
            city,
            state,
            postal_code
        });

        await newPersonalDetails.save();
        res.status(201).json(newPersonalDetails);
    } catch (err) {
        console.error('Error creating personal details:', err); // Log the full error
        res.status(500).json({ error: 'An error occurred while creating personal details' });
    }
};





const getAllPersonalDetails = async (req, res) => {
    try {
        const personalDetails = await PersonalDetails.find();
        res.status(200).json(personalDetails);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const getAllFamilyDetails = async (req, res) => {
    try {
        const familyDetails = await FamilyDetails.find({});
        res.status(200).send(familyDetails);
    } catch (error) {
        res.status(400).send(error);
    }
};



const getAllEduDetails = async (req, res) => {
    try {
        const eduDetails = await EduDetails.find({});
        res.status(200).send(eduDetails);
    } catch (error) {
        res.status(400).send(error);
    }
};


const getAllPreferences = async (req, res) => {
    try {
        const preferences = await Preferences.find({});
        res.status(200).send(preferences);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Family Details
const createFamilyDetails = async (req, res) => {
    try {
        const familyDetails = new FamilyDetails({
            ...req.body,
        });
        await familyDetails.save();
        res.status(201).send(familyDetails);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Edu Details
const createEduDetails = async (req, res) => {
    try {
        const eduDetails = new EduDetails({
            ...req.body,
           
        });
        await eduDetails.save();
        res.status(201).send(eduDetails);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Preferences
const createPreferences = async (req, res) => {
    try {
        const preferences = new Preferences({
            ...req.body,
        });
        await preferences.save();
        res.status(201).send(preferences);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    createFamilyDetails,
    getAllFamilyDetails,
    createEduDetails,
    getAllEduDetails,
    createPreferences,
    getAllPreferences,
    createPersonalDetails,
    getAllPersonalDetails
};
