import { Schema, model } from "mongoose";
import { UserEntity } from "@/domain/entities";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["student", "instructor", "admin"]
    },
    profile: {
        avatar: {
            type: String
        },
        dob: {
            type: String,
        },
        gender: {
            type: String,
            enum: ["male", "female", "other"]
        }
    },
    contact: {
        additionalEmail: {
            type: String
        },
        phone: {
            type: String,
        },
        socialMedia: {
            instagram: String,
            linkedIn: String,
            github: String,
            youtube: String
        }
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const User = model<UserEntity>("users", userSchema);