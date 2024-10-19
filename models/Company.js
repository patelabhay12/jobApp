const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true, unique: true }, 
    employeeSize: { type: Number, required: true },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
});

module.exports = mongoose.model('Company', CompanySchema);
