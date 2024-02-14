import { IDependencies } from "@/application/interfaces/IDependencies";

export const acceptInstructrorApplicationUsecase = (dependencies: IDependencies) => {
    const {
        repositories: { acceptInstructorApplication }
    } = dependencies;

    return {
        execute: async (
            id: string
        ) => {
            return await acceptInstructorApplication(id);
        }
    }
}