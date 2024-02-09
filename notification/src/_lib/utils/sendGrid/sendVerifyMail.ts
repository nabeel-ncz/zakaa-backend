import sendGridMail from "@sendgrid/mail";
import { config } from "@/_boot/config";

sendGridMail.setApiKey(config.sendgrid.api_key);


export const sendVerifyMail = async (
    data: {
        email: string,
        otp: string
    }
) => {

    const message = {
        to: data.email,
        from: {
            name: "Zakaa Learning",
            email: `${config.sendgrid.email}`
        },
        subject: "Zakaa account verification",
        text: "Please verify your account with this OTP",
        html: `<h2>Your OTP : ${data.otp}</h2>`
    };

    try {
        await sendGridMail.send(message);
    } catch (error: any) {
        throw new Error(error.message || "send grid mail issue!");
    }
}