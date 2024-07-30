const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preferencesSchema = new Schema({
    userId: { type: String },
    preference_1: String,
    preference_2: String,
    preference_3: String,
    preference_4: String,
}, { timestamps: true });

module.exports = mongoose.model('Preferences', preferencesSchema);
