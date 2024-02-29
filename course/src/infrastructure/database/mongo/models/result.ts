import { ResultEntity } from "@/domain/entities";
import { Schema, model } from "mongoose";

const resultSchema = new Schema({
    assessmentRef: {
        type: Schema.Types.ObjectId,
        ref: "assessments",
        required: true
    },
    userRef: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    response: {
        type: [Number]
    },
    score: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export const Result = model<ResultEntity>("results", resultSchema);