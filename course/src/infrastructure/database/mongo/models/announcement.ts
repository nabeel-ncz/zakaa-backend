import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    userRef: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const announcementSchema = new Schema<AnnouncementEntity>({
    userRef: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: [Schema.Types.ObjectId],
    dislikes: [Schema.Types.ObjectId],
    comments: [commentSchema],
    isBlocked: {
        type: Boolean,
        default: false
    }
})

export const Annoucement = model("announcement", announcementSchema);

