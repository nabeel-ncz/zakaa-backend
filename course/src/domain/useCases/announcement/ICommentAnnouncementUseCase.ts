import { AnnouncementEntity } from "@/domain/entities";
import { Types } from "mongoose";

export interface ICommentAnnouncementUseCase {
    execute(data: {
        _id: Types.ObjectId | string;
        userRef: Types.ObjectId | string;
        comment: string;
    }): Promise<AnnouncementEntity | null>;
}