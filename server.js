require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// ✅ Use environment variable for frontend URL
const FRONTEND_URL = process.env.FRONTEND_URL || "https://portfolio-phi-lilac-68.vercel.app";

app.use(cors({
    origin: FRONTEND_URL,  
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());

// ✅ Test route for debugging
app.get("/", (req, res) => {
    res.json({ success: true, message: "Server is running!" });
});

// ✅ Contact Form Route
app.post("/contact", async (req, res) => {
    console.log("Received Data:", req.body);  // Debugging
    const { firstName, lastName, email, message, phone } = req.body;

    if (!firstName || !email || !message) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.BREVO_USER,
            pass: process.env.BREVO_PASS,
        },
    });

    const mailOptions = {
        from: process.env.BREVO_USER,
        to: process.env.BREVO_USER,
        subject: "Contact Form Submission",
        html: `
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
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

// ✅ Use Render-assigned port for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
