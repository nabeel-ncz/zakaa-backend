import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const findByEmail = async (
    email: string
): Promise<UserEntity | null> => {
    try {

        const existingUser = await User.findOne({
            email: email
        });

        if (!existingUser) {
            throw new Error("User does not exist!");
        }

        return existingUser;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}