import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const updateUserProfit = async (
    userId: string, amount: number
): Promise<UserEntity | null> => {
    try {

        const updated = await User.findByIdAndUpdate(userId, { $inc: { profit: amount } });

        if (!updated) {
            throw new Error("User updation failed!");
        }

        return updated;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}