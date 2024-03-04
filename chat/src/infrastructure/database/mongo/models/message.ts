import { MessageEntity } from "@/domain/entities";
import { Schema, model } from "mongoose";

const messageSchema = new Schema<MessageEntity>({
    chat: {
        type: Schema.Types.ObjectId,
        ref: "chats",
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "messages",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        enum: ['text', 'image', 'audio', 'video', 'file'],
        default: 'text'
    }
}, {
    timestamps: true
});

export const Message = model("messages", messageSchema);
