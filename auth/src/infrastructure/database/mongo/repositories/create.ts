import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";
import { userCreatedProducer } from "@/infrastructure/messages/kafka/producers";

export const create = async (
    data: UserEntity
): Promise<UserEntity | null> => {
    try {

        const newUser = await User.create(data);

        if (!newUser) {
            throw new Error("User creation failed!");
        }

        //produce-user-creation-message
        await userCreatedProducer(newUser);

        return newUser;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}