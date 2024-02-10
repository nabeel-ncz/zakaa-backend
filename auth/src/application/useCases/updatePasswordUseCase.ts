import { IDependencies } from "@/application/interfaces/IDependencies";

export const updatePasswordUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { updatePassword }
    } = dependencies;

    return {
        execute: async (
            data: {
                email: string,
                password: string
            }
        ) => {
            return await updatePassword({
                email: data.email,
                password: data.password
            });
        }
    }
}