import { User } from "@/infrastructure/database/mongo/models";
import { UserEntity } from "@/domain/entities";

export const getAllInstructors = async (
    p?: number,
    l?: number
): Promise<UserEntity[] | null> => {
    try {
        const page = p || 1;
        const limit = l || 10;
        const skip = (page - 1) * limit;

        const users = await User.find({ role: "instructor" }).skip(skip).limit(limit);
        return users;
        
    } catch (error: any) {
        throw new Error(error?.message);
    }
}