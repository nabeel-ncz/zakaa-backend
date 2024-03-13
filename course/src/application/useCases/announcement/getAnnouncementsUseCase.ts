import { IDependencies } from "../../interfaces/IDependencies";

export const getAnnouncementsUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getAnnouncements }
    } = dependencies;

    return {
        execute: async (page?: number, limit?: number) => {
            return await getAnnouncements({ page, limit });
        }
    }

};