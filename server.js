require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// ✅ Fix CORS: Allow requests from Vercel frontend
app.use(cors({
    origin: "https://portfolio-phi-lilac-68.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());

// ✅ Add CORS headers manually for all responses
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://portfolio-phi-lilac-68.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// Test Route (Check if backend is reachable)
app.get("/test", (req, res) => {
    res.json({ success: true, message: "Backend is working!" });
});

// ✅ Contact Form Route
app.post("/contact", async (req, res) => {
    console.log("Received Data:", req.body);
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

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
