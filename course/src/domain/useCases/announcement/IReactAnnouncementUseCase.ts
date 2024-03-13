import { AnnouncementEntity } from "@/domain/entities";
import { Types } from "mongoose";

export interface IReactAnnouncementUseCase {
    execute(data: {
        _id: Types.ObjectId | string;
        userRef: Types.ObjectId | string;
        type: 'like' | 'dislike' | string;
    }): Promise<AnnouncementEntity | null>;
}