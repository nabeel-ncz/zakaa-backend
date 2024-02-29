import { IDependencies } from "@/application/interfaces/IDependencies";

export const findUserByIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { findUserById }
    } = dependencies;

    return {
        execute: async (
            id: string
        ) => {
            return await findUserById(id);
        }
    }
}