import { IDependencies } from "../../interfaces/IDependencies";
import { Types } from "mongoose";

export const reactAnnouncementUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { reactAnnoucement }
    } = dependencies;

    return {
        execute: async (data: {
            _id: Types.ObjectId | string;
            userRef: Types.ObjectId | string;
            type: 'like' | 'dislike' | string;
        }) => {
            return await reactAnnoucement(data);
        }
    }
};