import { IDependencies } from "../../interfaces/IDependencies";

export const getAnnouncementByIdUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getAnnouncementById }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getAnnouncementById(id);
        }
    }
    
};