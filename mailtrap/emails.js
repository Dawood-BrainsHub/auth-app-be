import { mailtrapClient, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verficationToken) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verficationToken),
            category: "Email Verification"
        })
        console.log("Email send Successfully", response);
    } catch (error) {
        console.error(`Error Sending Verificaion`, error);
        throw new Error(`Error Sending Verification Email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "5a4d6d97-312e-45f1-afb4-41cc3cbac413",
            template_variables: {
                "company_info_name": "My-App",
                "name": name
            }
        })
        console.log("Welcome Email send Successfully", response);

    } catch (error) {
        console.error(`Error Sending Verificaion`, error);
        throw new Error(`Error Sending Verification Email: ${error}`);
    }
};
export const sendPasswordResetEmail = async(email, resetURL) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        })
        console.log("Password Reset Email send Successfully", response);
    } catch (error) {
        console.error(`Password Reset Email Sending Error`, error);
        throw new Error(`Password Reset Email Sending Error: ${error}`);
    }
};
export const sendResetSuccessEmail = async(email) =>{
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset Success"
        })
        console.log("Password Reset Email send Successfully", response);
    } catch (error) {
        console.error(`Error Password Reset Success Email`, error);
        throw new Error(`Error Password Reset Success Email: ${error}`);
    }
};