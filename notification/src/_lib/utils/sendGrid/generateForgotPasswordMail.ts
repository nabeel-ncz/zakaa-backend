import sendGridMail from "@sendgrid/mail";
import { config } from "@/_boot/config";

sendGridMail.setApiKey(config.sendgrid.api_key);


export const generateForgotPasswordMail = async (
    data: {
        email: string,
        url: string
    }
) => {

    const message = {
        to: data.email,
        from: {
            name: "Zakaa Learning",
            email: `${config.sendgrid.email}`
        },
        subject: "Forgot password",
        text: "Please use this link to change your password",
        html: `<h2>Use this button to change your password </h2>
                <h4>This link will expire after 15 minutes</h4>
                <a href="${data.url}"><button>Change password<button></a>`
    };

    try {
        await sendGridMail.send(message);
    } catch (error: any) {
        throw new Error(error.message || "send grid mail issue!");
    }
}