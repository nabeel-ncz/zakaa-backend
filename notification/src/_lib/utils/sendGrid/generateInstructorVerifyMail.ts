import sendGridMail from "@sendgrid/mail";
import { config } from "@/_boot/config";

sendGridMail.setApiKey(config.sendgrid.api_key);

export const generateInstructorVerifyMail = async (
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
        subject: "Instructor verification",
        text: "Please use this link to verify as instructor",
        html: `<h2>Use this button to change</h2>
                <h4>This link will expire after 15 days</h4>
                <a href="${data.url}"><button>Verify<button></a>`
    };

    try {
        await sendGridMail.send(message);
    } catch (error: any) {
        throw new Error(error.message || "send grid mail issue!");
    }
}