import { Types } from "mongoose";

export interface ResultEntity {
    _id?: Types.ObjectId;
    userRef: Types.ObjectId;
    assessmentRef: Types.ObjectId;
    response: number[];
    score: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};