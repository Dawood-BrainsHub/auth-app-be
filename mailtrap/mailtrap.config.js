import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Gmail transporter using App Password
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,     // Your Gmail address
    pass: process.env.EMAIL_PASS      // 16-character App Password
  }
});

// Sender info (you can still use your name here)
export const sender = {
  email: process.env.EMAIL_USER,
  name: "Muhammad Dawood",
};
