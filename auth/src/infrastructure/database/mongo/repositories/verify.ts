import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const verify = async (
    email: string
): Promise<UserEntity | null> => {
    try {

        const updated = await User.findOneAndUpdate({
            email: email
        }, {
            isVerified: true,
            otp: ""
        }, {
            new: true
        })

        if (!updated) {
            throw new Error("User updation failed!");
        }

        return updated;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}