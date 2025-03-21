require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587, // Use 465 for SSL
    secure: false,
    auth: {
        user: process.env.BREVO_USER, 
        pass: process.env.BREVO_PASS,
    },
});

app.post("/contact", async (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    
    if (!firstName || !email || !message) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const mailOptions = {
        from: process.env.BREVO_USER, 
        to: process.env.BREVO_USER, // Your email to receive messages
        subject: "Contact Form Submission",
        html: `
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Email error:", error);
        res.status(500).json({ success: false, message: "Email not sent" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
