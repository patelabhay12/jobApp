const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'abhaypatel6794@gmail.com', 
        pass: process.env.PASSWORD, 
    },
});

const sendEmail = (to, otp) => {
    const mailOptions = {
        from: 'abhaypatel6794@gmail.com',
        to,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
