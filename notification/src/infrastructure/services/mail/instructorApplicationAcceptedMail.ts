import { config } from "@/_boot/config";
import { generateInstructorVerifyMail } from "@/_lib/utils/sendGrid";

export const instructorApplicationAcceptedMail = async (
    email: string,
    token: string
) => {
    try {

        await generateInstructorVerifyMail({
            email: email,
            url: `${config.urls.frontend}/verify-instructor?token=${token}`
        });

    } catch (error: any) {
        console.log(error);
    }

}