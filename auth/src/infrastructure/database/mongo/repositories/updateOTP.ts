import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const updateOTP = async (
    data: {
        email: string,
        otp: string
    }
): Promise<UserEntity | null> => {
    try {

        const updatedUser = await User.findOneAndUpdate({
            email: data.email
        }, {
            otp: data.otp
        });

        if (!updatedUser) {
            throw new Error("User otp updation failed!");
        }

        return updatedUser;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}