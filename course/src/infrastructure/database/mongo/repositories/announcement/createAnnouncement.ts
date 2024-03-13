import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Annoucement } from "../../models";

export const createAnnouncement = async (
    data: AnnouncementEntity
): Promise<AnnouncementEntity | null> => {
    try {
        const newAnnouncement = await Annoucement.create(data);
        return newAnnouncement;
    } catch (error: Error | any) {
        throw new Error(error?.message || "Error creating annoucement");
    }
}