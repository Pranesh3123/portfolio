require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();


// ✅ Middleware to parse JSON body
app.use(express.json());  // Ensures JSON parsing
app.use(express.urlencoded({ extended: true }));  // Handles URL-encoded data
app.use(cors({
    origin: ["https://portfolio-obgm.onrender.com", "http://localhost:3000"], // Allow both production and local frontend
    methods: ["GET", "POST"], // Specify allowed methods
    allowedHeaders: ["Content-Type"] // Allow required headers
}));


// Test route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
