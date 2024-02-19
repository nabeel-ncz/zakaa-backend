import { IDependencies } from "../interfaces/IDependencies";

export const getCoursesByInstructorIdUseCase = (dependencies: IDependencies) => {
    
    const {
        repositories: { getCoursesByInstructorId }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getCoursesByInstructorId(id);
        }
    }
};
