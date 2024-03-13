import { Types } from "mongoose";
import { IDependencies } from "../../interfaces/IDependencies";

export const addLessonUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { addLesson }
    } = dependencies;

    return {
        execute: async (data: {
            courseId: Types.ObjectId | string;
            title: string;
            description: string;
            thumbnail: string;
            video: string;
            attachments?: {
                title: string;
                url: string;
            }
        }) => {
            return await addLesson(data);
        }
    }
};