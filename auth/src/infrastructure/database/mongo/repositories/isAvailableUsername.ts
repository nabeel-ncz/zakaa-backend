import { User } from "@/infrastructure/database/mongo/models";

export const isAvailableUsername = async (
    username: string
): Promise<boolean | null> => {
    try {

        const existingUser = await User.findOne({
            username: username
        });

        if (!existingUser) {
            return true;
        }

        throw new Error("User already exist with the username!")

    } catch (error: any) {
        throw new Error(error?.message);
    }
}