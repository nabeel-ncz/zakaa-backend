import { IDependencies } from "../../interfaces/IDependencies";

export const getTopInstructorsByEnrollmentsUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getTopInstructorsByEnrollments }
    } = dependencies;

    return {
        execute: async () => {
            return await getTopInstructorsByEnrollments();
        }
    }
};