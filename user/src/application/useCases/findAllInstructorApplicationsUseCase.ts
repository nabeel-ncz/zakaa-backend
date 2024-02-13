import { IDependencies } from "@/application/interfaces/IDependencies";

export const findAllInstructorApplicationsUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { findAllInstructorApplication }
    } = dependencies;

    return {
        execute: async (
            page: number,
            limit: number
        ) => {
            return await findAllInstructorApplication(page, limit);
        }
    }
}