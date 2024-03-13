import { AnnouncementEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const updateAnnouncementUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { updateAnnouncement }
    } = dependencies;

    return {
        execute: async (data: AnnouncementEntity) => {
            return await updateAnnouncement(data);
        }
    }
};