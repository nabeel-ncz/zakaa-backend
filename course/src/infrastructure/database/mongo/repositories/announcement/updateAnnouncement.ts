import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Annoucement } from "../../models";

export const updateAnnouncement = async (
    data: AnnouncementEntity
): Promise<AnnouncementEntity | null> => {
    try {
        const { _id, ...rest } = data;
        const updated = await Annoucement.findByIdAndUpdate(_id, {
            $set: { ...rest }
        }, {
            new: true
        })
        return updated;
    } catch (error: Error | any) {
        throw new Error(error?.message || "Error updating annoucement");
    }
}