const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your mail', // Replace with your email
        pass: 'your password',       // Replace with your app-specific password
    },
});

const mailOptions = {
    from: 'your mail',
    to: 'hr@ignitershub.com',
    subject: 'Challenge 3 Completed',
    text: `Name: Divyanshu Singh\nSemester: Btech completed(Batch 2024)\nBranch: Computer Science\nRoll Number: 2013061157`,
    attachments: [
        {
            filename: './files/image.jpg', // Replace with your image filename
            content: fs.createReadStream('./image.jpg'), // Replace with your image path
        },
    ],
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
