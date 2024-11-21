const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familyDetailsSchema = new Schema({
    userId: { type: String },
    father_name: String,
    mother_name: String,
    father_occupation: String,
    mother_occupation: String,
    father_number: String,
    mother_number: String,
}, { timestamps: true });

module.exports = mongoose.model('FamilyDetails', familyDetailsSchema);
