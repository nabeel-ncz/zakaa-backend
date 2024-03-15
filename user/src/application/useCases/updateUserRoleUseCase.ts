import { IDependencies } from "@/application/interfaces/IDependencies";

export const updateUserRoleUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { updateUserRole }
    } = dependencies;

    return {
        execute: async (
            email: string,
            role: string
        ) => {
            return await updateUserRole(email, role);
        }
    }
}