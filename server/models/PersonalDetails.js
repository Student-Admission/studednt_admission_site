const mongoose = require('mongoose');

const PersonalDetailsSchema = new mongoose.Schema({
    userId: { type: String },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_no: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    allotted_branch: { type: String, default: null },
    allotted_preference: { type: Number, default: 0 }

});

module.exports = mongoose.model('PersonalDetails', PersonalDetailsSchema);
