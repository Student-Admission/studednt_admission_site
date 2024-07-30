const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eduDetailsSchema = new Schema({
    userId: { type: String },
    application_no_1: String,
    application_no_2: String,
    rank_1: String,
    rank_2: String,
    application_no_adv: String,
    rank_adv: String,
    percentage_12: String,
    percentage_10: String,
}, { timestamps: true });

module.exports = mongoose.model('EduDetails', eduDetailsSchema);
