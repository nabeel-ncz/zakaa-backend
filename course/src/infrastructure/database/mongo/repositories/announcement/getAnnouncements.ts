import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Annoucement } from "../../models";

export const getAnnouncements = async (
    data: {
        page?: number;
        limit?: number;
    }
): Promise<AnnouncementEntity[] | null> => {
    try {
        
        const page = data.page || 1;
        const limit = data.limit || 10;
        const skip = (page - 1) * limit;

        const result = await Annoucement.find().skip(skip).limit(limit);

        return result;

    } catch (error: Error | any) {
        throw new Error(error?.message || "Error fetching announcements");
    }
}