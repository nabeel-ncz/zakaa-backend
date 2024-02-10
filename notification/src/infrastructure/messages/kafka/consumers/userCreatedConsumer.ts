import { sendVerificationMail } from "@/infrastructure/services/mail";

export default async (
    data: {
        email: string;
    }
) => {

    try {

        await sendVerificationMail(data.email);

        console.log("==========");
        console.log("user-created-consumed mail send");
        console.log("==========");

    } catch (error: any) {
        console.log("user-created-consumed mail send error: ", error?.message);
    }

}