import { instructorApplicationAcceptedMail } from "@/infrastructure/services/mail";

export default async (
    data: {
        email: string;
        token: string;
    }
) => {

    try {

        await instructorApplicationAcceptedMail(data.email, data.token);

        console.log("==========");
        console.log("instructor application accepted mail send");
        console.log("==========");

    } catch (error: any) {
        console.log("instructor application accepted mail send error: ", error?.message);
    }

}