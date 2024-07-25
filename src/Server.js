const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-service-email@gmail.com", 
    pass: "your-email-password", 
  },
});

app.post("/send-email", (req, res) => {
  const { email, subject, message } = req.body;

  const mailOptions = {
    from: "your-service-email@gmail.com", 
    to: "recipient-email@gmail.com", 
    subject: `New message from ${email}: ${subject}`,
    text: `You have received a new message from ${email}.\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
