import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Annoucement } from "../../models";
import { Types } from "mongoose";

export const commentAnnouncement = (
    data: {
        _id: Types.ObjectId | string;
        userRef: Types.ObjectId | string;
        comment: string;
    }
): Promise<AnnouncementEntity | null> => {
    try {

        const { _id, ...comment } = data;

        const updated = Annoucement.findByIdAndUpdate(_id, {
            $push: { comments: comment }
        }, {
            new: true
        });

        return updated;
    } catch (error: Error | any) {
        throw new Error(error?.message || "Error Adding comment in annoucement");
    }
}