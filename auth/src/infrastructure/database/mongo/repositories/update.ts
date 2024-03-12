import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const update = async (
    data: UserEntity
): Promise<UserEntity | null> => {
    try {

        const { _id, ...updates } = data;

        const updated = await User.findByIdAndUpdate(_id, {
            $set: { ...updates }
        }, {
            new: true
        });

        if (!updated) {
            throw new Error("User updation failed!");
        }

        return updated;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}