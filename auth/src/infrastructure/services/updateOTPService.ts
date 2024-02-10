import { updateOTP } from "../database/mongo/repositories"

export const updateOTPService = async (
    email: string,
    otp: string
) => {
    try {

        await updateOTP({
            email,
            otp
        });

    } catch (error) {
        console.log(error);
    }
}