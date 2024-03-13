import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Annoucement } from "../../models";

export const createAnnouncement = (
    data: AnnouncementEntity
): Promise<AnnouncementEntity | null> => {
    try {
        const newAnnouncement = Annoucement.create(data);
        return newAnnouncement;
    } catch (error: Error | any) {
        throw new Error(error?.message || "Error creating annoucement");
    }
}