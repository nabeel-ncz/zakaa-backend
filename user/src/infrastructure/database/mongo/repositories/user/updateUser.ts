import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const updateUser = async (
    data: UserEntity
): Promise<UserEntity | null> => {
    try {

        const { _id, ...rest } = data;

        const updated = await User.findOneAndUpdate(_id, {
            $set: { ...rest }
        }, {
            new: true
        });

        if (!updated) {
            throw new Error("User updation failed!");
        }

        return updated;

    } catch (error: any) {
        if(error?.code === 11000){
            throw new Error("Username already exist in the database");
        }
        throw new Error(error?.message);
    }
}