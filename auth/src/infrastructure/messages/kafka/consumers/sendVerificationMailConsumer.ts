import { updateOTPService } from "@/infrastructure/services/updateOTPService";

export default async (
    data: {
        email: string;
        otp: string;
    }
) => {

    try {

        await updateOTPService(data.email, data.otp);        

        console.log("==========");
        console.log("send-verification-mail-consumed");
        console.log("==========");

    } catch (error: any) {
        console.log("send-verification-mail-consumed error: ", error?.message);
    }

}