import { config } from "@/_boot/config";
import { generateForgotPasswordMail } from "@/_lib/utils/sendGrid";

export const sendChangePasswordMail = async (
    email: string,
    token: string
) => {
    try {

        await generateForgotPasswordMail({
            email: email,
            url: `${config.urls.frontend}/auth/change-password?token=${token}`
        });

    } catch (error: any) {
        console.log(error);
    }

}