import { IDependencies } from "@/application/interfaces/IDependencies";

export const findUsersByUsernameUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { findUsersByUsername }
    } = dependencies;

    return {
        execute: async (
            username: string
        ) => {
            return await findUsersByUsername(username);
        }
    }
}