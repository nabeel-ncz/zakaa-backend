import { IDependencies } from "../../interfaces/IDependencies";

export const getAnnouncementsByInstructorIdUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getAnnouncementsByInstructorId }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getAnnouncementsByInstructorId(id);
        }
    }
    
};