import { IDependencies } from "@/application/interfaces/IDependencies";
import { UserEntity } from "@/domain/entities";

export const updateUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { update }
    } = dependencies;

    return {
        execute: async (data: UserEntity) => {
            try {

                return await update(data);
                
            } catch (error: any) {
                throw new Error(error.message || "User updation failed");
            }
        }
    }
}