const twilio = require('twilio');
require('dotenv').config();
const accountSid = process.env.ACCOUNTSID; 
const authToken = process.env.AUTHTOKEN; 
const client = new twilio(accountSid, authToken);

const sendSms = (to, otp) => {
    return client.messages.create({
        body: `Your OTP code is: ${otp}`,
        to, 
        from: '+91-7525858518', 
    });
};

module.exports = { sendSms };
 