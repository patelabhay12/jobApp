const Company = require('../models/Company');
const Job = require('../models/Job');
const nodemailer = require('nodemailer');
const { sendEmail } = require('../helper/mailer');
const { sendSms } = require('../helper/smsOtp');
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);
let otpStore = {};

// Register Company
exports.register = async (req, res) => {
    const { name, phoneNumber, companyName, companyEmail, employeeSize } = req.body;

    try {


        console.log(req.body);
        const existingCompany = await Company.findOne({ companyEmail });
        if (existingCompany) {
            return res.status(400).json({ message: 'Company with this email already exists' });
        }

        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        if (!phoneNumber) {
            return res.status(400).json({ message: 'Phone Number is required' });
        }
        if (!companyEmail) {
            return res.status(400).json({ message: 'company Email is required' });
        }
        if (!employeeSize) {
            return res.status(400).json({ message: 'employee Size  is required' });
        }
        if (!companyName) {
            return res.status(400).json({ message: 'Company Name is required' });
        }
        const company = new Company({
            name,
            phoneNumber,
            companyName,
            companyEmail,
            employeeSize,
        });

        const savedCompany = await company.save();
        console.log('Saved company:', savedCompany);

        // Generate OTP and send verification
        const otpEmail = generateOtp();
        const otpPhone = generateOtp();
        otpStore['Email'] = otpEmail;
        otpStore['Phone']=otpPhone;
        console.log(otpStore['Email']);

        console.log("Here i am ") 
        await sendEmail(companyEmail, otpEmail);
        await sendSms(phoneNumber, otpPhone);
        console.log("Here i am not")

        res.status(201).json({ message: 'Company registered. Please verify your email and phone with the OTP sent.' });

    } catch (error) {
        console.error('Error registering company:', error.message); // Log error
        res.status(400).json({ message: 'Error registering company', error: error.message });
    }
};

// Post Job
exports.postJob = async (req, res) => {
    const { title, description, experienceLevel, endDate, candidates } = req.body;

    if (candidates && !Array.isArray(candidates)) {
        return res.status(400).json({ message: 'Candidates must be an array of email addresses' });
    }

    const job = new Job({
        title,
        description,
        experienceLevel,
        endDate,
        candidates: candidates.map(email => ({ email })),
        companyId: req.company.id,
    });

    try {
        await job.save();
        res.status(201).json({ message: 'Job posted successfully', job });
    } catch (error) {
        res.status(400).json({ message: 'Error posting job', error });
    }
};


// Email Automation
exports.sendJobAlerts = async (req, res) => {
    const { candidatesEmails, jobDetails } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: candidatesEmails,
        subject: 'New Job Alert',
        text: `Job Title: ${jobDetails.title}\nDescription: ${jobDetails.description}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ message: 'Emails sent successfully', info });
    });
};


exports.verifyOtpEmail = (req, res) => {
    console.log(req.body)
    const { email } = req.body;
    if (otpStore['Email']== email) {
        delete otpStore['Email'];
        return res.status(200).json({ message: 'OTP verified successfully!' });
    } else {
        return res.status(400).json({ message: 'Invalid OTP or OTP expired.' });
    }
};
exports.verifyOtpPhone = (req, res) => {
    const { otp } = req.body;

    if (otpStore['Phone']== otp) {
        delete otpStore['Phone'];
        return res.status(200).json({ message: 'OTP verified successfully!' });
    } else {
        return res.status(400).json({ message: 'Invalid OTP or OTP expired.' });
    }
};
