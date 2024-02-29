import { IDependencies } from "../../interfaces/IDependencies";

export const getEnrollmentsByInstructorIdUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getEnrollmentsByInstructorId }
    } = dependencies;

    return {
        execute: async (instructorId: string) => {
            return await getEnrollmentsByInstructorId(instructorId);
        }
    }
    
};