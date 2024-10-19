const express = require('express');
const router = express.Router();
const companyController = require('../controllers/CompanyController');
const authMiddleware = require('../middleware/auth');

router.post('/register', companyController.register);
router.post('/login', companyController.login);
router.post('/post-job', authMiddleware, companyController.postJob);
router.post('/send-job-alerts', authMiddleware, companyController.sendJobAlerts);
router.post('/verify-otp', companyController.verifyOtp);

module.exports = router;

