import { IDependencies } from "@/application/interfaces/IDependencies";
import { UserEntity } from "@/domain/entities";

export const updateUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { updateUser }
    } = dependencies;

    return {
        execute: async (
            data: UserEntity
        ) => {
            return await updateUser(data);
        }
    }
}