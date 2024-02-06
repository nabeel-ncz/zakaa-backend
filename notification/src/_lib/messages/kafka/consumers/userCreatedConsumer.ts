import { sendVerifyMail } from "@/_lib/utils/sendGrid/sendVerifyMail";

export default async (
    data: {
        email: string;
        otp: string;
    }
) => {

    try {

        await sendVerifyMail({
            email: data.email,
            otp: data.otp
        });

        console.log("==========");
        console.log("user-created-consumed mail send");
        console.log("==========");

    } catch (error: any) {
        console.log("user-created-consumed mail send error: ", error?.message);
    }

}