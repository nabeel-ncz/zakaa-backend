import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Annoucement } from "../../models";

export const getAnnouncementsByInstructorId = async (
    id: string
): Promise<AnnouncementEntity[] | null> => {
    try {

        const result = await Annoucement.find({ userRef: id });

        return result;

    } catch (error: Error | any) {
        throw new Error(error?.message || "Error fetching announcements");
    }
}