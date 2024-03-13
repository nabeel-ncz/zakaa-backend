import { IDependencies } from "../../interfaces/IDependencies";
import { Types } from "mongoose";

export const commentAnnouncementUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { commentAnnouncement }
    } = dependencies;

    return {
        execute: async (data: {
            _id: Types.ObjectId | string;
            userRef: Types.ObjectId | string;
            comment: string;
        }) => {
            return await commentAnnouncement(data);
        }
    }
};