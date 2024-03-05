import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const findUsersByUsername = async (
    username: string
): Promise<UserEntity[] | null> => {
    try {

        const users = await User.find({
             username: { $regex: new RegExp(`^${username}`, 'i') } 
        })
        
        return users;
    
    } catch (error: any) {
        throw new Error(error?.message);
    }
}