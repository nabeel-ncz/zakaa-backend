import { AnnouncementEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const createAnnouncementUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createAnnouncement }
    } = dependencies;

    return {
        execute: async (data: AnnouncementEntity) => {
            return await createAnnouncement(data);
        }
    }
};