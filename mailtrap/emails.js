import { transporter, sender } from "./mailtrap.config.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";

const formatFrom = () => `"${sender.name}" <${sender.email}>`;

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await transporter.sendMail({
      from: formatFrom(),
      to: email,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
    });
    console.log("Verification email sent successfully", response.response);
  } catch (error) {
    console.error("Error sending verification email", error);
    throw new Error("Error sending verification email");
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const html = `
    <h2>Welcome to My-App, ${name}!</h2>
    <p>We're excited to have you on board 🚀</p>
  `;

  try {
    const response = await transporter.sendMail({
      from: formatFrom(),
      to: email,
      subject: "Welcome to My-App!",
      html,
    });
    console.log("Welcome email sent successfully", response.response);
  } catch (error) {
    console.error("Error sending welcome email", error);
    throw new Error("Error sending welcome email");
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const response = await transporter.sendMail({
      from: formatFrom(),
      to: email,
      subject: "Reset Your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });
    console.log("Password reset email sent successfully", response.response);
  } catch (error) {
    console.error("Error sending password reset email", error);
    throw new Error("Error sending password reset email");
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: formatFrom(),
      to: email,
      subject: "Password Reset Successfully",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
    console.log("Password reset success email sent", response.response);
  } catch (error) {
    console.error("Error sending password reset success email", error);
    throw new Error("Error sending password reset success email");
  }
};
