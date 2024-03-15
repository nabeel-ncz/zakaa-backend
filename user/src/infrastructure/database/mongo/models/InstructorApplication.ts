import { Schema, model } from "mongoose";
import { InstructorApplicationEntity } from "@/domain/entities";

const instructorApplicationSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    profession: {
        type: String,
        required: true,
    },
    profileDescription: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String
    },
    github: {
        type: String
    },
    accepted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const instructorApplication = model<InstructorApplicationEntity>("instructor_applications", instructorApplicationSchema);