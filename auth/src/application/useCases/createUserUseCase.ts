import { IDependencies } from "@/application/interfaces/IDependencies";

export const createUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { create }
    } = dependencies;

    return {
        execute: async (data: any) => {
            return await create(data);
        }
    }
}