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
        if (data?.type !== 'like' && data?.type !== 'dislike') {
            throw new Error("Invalid reaction type. It must be either 'like' or 'dislike'.");
        }

        let updateQuery;

        if (data?.type === 'like') {
            updateQuery = {
                $addToSet: { likes: data?.userRef },
                $pull: { dislikes: data?.userRef }
            };
        } else {
            updateQuery = {
                $addToSet: { dislikes: data?.userRef },
                $pull: { likes: data?.userRef }
            };
        }

        const options = { new: true };
        const updated = await Annoucement.findByIdAndUpdate(data?._id, updateQuery, options);

        if (!updated) {
            throw new Error("Announcement not found.");
        }

        return updated;
    } catch (error: Error | any) {
        throw new Error(error?.message || "Error reacting annoucement");
    }
}