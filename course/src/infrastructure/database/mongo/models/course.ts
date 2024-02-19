import { Schema, model, Types } from "mongoose";
import { CourseEntity } from "@/domain/entities";

const lessonSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    video: {
        high: String,
        medium: String,
        low: String
    },
    attachments: {
        title: String,
        url: String
    }
});

const trialSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    thumbnail: {
        type: String
    },
    video: {
        high: String,
        medium: String,
        low: String
    }
});

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    instructorRef: {
        type: Types.ObjectId,
        required: true
    },
    categoryRef: {
        type: Types.ObjectId,
        ref: "categoires",
        required: true
    },
    language: {
        type: String,
        default: "english"
    },
    lessons: [lessonSchema],
    trial: trialSchema,
    pricing: {
        type: String,
        enum: ["free", "paid"],
        required: true
    }
}, {
    timestamps: true
});

export const Course = model<CourseEntity>("courses", courseSchema);