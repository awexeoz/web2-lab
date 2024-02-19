const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' folder

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'awexeoz7z@gmail.com',
    pass: 'rjuo knag jgru sasi'
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/send-email', async (req, res) => {
  const { to, subject, message } = req.body;
  try {
    await transporter.sendMail({
      from: 'awexeoz7z@gmail.com',
      to: to,
      subject: subject,
      text: message,
    });
    res.send('Email sent successfully');
  } catch (error) {
    console.log(error);
    res.send('Failed to send email');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
