import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Annoucement } from "../../models";
import { Types } from "mongoose";

export const reactAnnoucement = async (
    data: {
        _id: Types.ObjectId | string;
        userRef: Types.ObjectId | string;
        type: 'like' | 'dislike' | string;
    }
): Promise<AnnouncementEntity | null> => {
    try {
        const { _id, userRef, type } = data;
        if (type === 'like') {
            const updated = await Annoucement.findByIdAndUpdate(_id, {
                $push: { likes: userRef }
            }, {
                new: true
            })
            return updated;
        } else if (type === 'dislike') {
            const updated = await Annoucement.findByIdAndUpdate(_id, {
                $push: { dislikes: userRef }
            }, {
                new: true
            })
            return updated;
        } else {
            throw new Error("Error reacting to annoucement");
        }
    } catch (error: Error | any) {
        throw new Error(error?.message || "Error reacting annoucement");
    }
}