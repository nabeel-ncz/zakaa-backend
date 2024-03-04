import { Types } from "mongoose";

export interface ChatEntity {
    _id?: string | Types.ObjectId;
    participants: Types.ObjectId[] | string[];
    type: 'individual' | 'group';
    groupName?: string | null;
    groupDescription?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}