import { Types } from "mongoose";

interface Comment {
    userRef: Types.ObjectId;
    comment: string;
}

export interface AnnouncementEntity {
    _id?: Types.ObjectId;
    userRef: Types.ObjectId;
    title: string;
    description: string;
    content: string;
    likes: Types.ObjectId[];
    dislikes: Types.ObjectId[];
    comments: Comment[];
    isBlocked: boolean;
}