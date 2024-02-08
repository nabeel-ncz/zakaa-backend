import { IDependencies } from "@/application/interfaces/IDependencies";

export const checkUsernameUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { isAvailableUsername }
    } = dependencies;

    return {
        execute: async (username: string) => {
            return await isAvailableUsername(username);
        }
    }
}