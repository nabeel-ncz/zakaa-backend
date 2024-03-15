import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Annoucement } from "../../models";

export const getAnnouncementById = async (
    id: string
): Promise<AnnouncementEntity | null> => {
    try {

        const result = await Annoucement.findById(id);

        return result;

    } catch (error: Error | any) {
        throw new Error(error?.message || "Error fetching announcements");
    }
}