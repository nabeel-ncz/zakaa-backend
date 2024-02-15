import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const findUserById = async (
    id: string
): Promise<UserEntity | null> => {
    try {

        const user = await User.findById(id);
        
        return user;
    
    } catch (error: any) {
        throw new Error(error?.message);
    }
}