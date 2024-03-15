import { generateVerificationOTP } from "@/_lib/utils/otp";
import { generateVerificationMail } from "@/_lib/utils/sendGrid";
import { sendVerifyMailProducer } from "@/infrastructure/messages/kafka/producers";

export const sendVerificationMail = async (email: string) => {
    try {
        
        const otp = generateVerificationOTP();
        
        //send mail using send-grid
        await generateVerificationMail({
            email: email,
            otp: otp
        });

        //produce message to kafka
        await sendVerifyMailProducer({
            email: email,
            otp: otp
        });

    } catch (error: any){
        console.log(error);
    }
}