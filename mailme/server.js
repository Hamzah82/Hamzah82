const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wokabi108@gmail.com',
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    const mailOptions = {
        from: email,
        to: 'wokabi108@gmail.com',
        subject: `New Message from ${name}: ${subject}`,
        text: `From: ${name} (${email})\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Email sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email', error });
    }
});

app.listen(3000, () => console.log('Server running on http://nebula.serveo.net'));
