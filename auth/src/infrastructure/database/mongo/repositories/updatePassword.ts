import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const updatePassword = async (
    data: {
        email: string,
        password: string
    }
): Promise<UserEntity | null> => {
    try {

        const updatedUser = await User.findOneAndUpdate({
            email: data.email
        }, {
            password: data.password
        });

        if (!updatedUser) {
            throw new Error("User password updation failed!");
        }

        return updatedUser;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}