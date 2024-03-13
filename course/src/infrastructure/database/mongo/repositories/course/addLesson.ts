import { Course } from "@/infrastructure/database/mongo/models";
import { CourseEntity } from "@/domain/entities";
import { Types } from "mongoose";

export const addLesson = async (
    data: {
        courseId: Types.ObjectId | string;
        title: string;
        description: string;
        thumbnail: string;
        video: string;
        attachments?: {
            title: string;
            url: string;
        }
    }
): Promise<CourseEntity | null> => {
    try {

        const { courseId, ...rest } = data;

        const updated = await Course.findByIdAndUpdate(courseId, {
            $push: { lessons: { ...rest } }
        }, { new: true });

        return updated

    } catch (error: any) {
        throw new Error(error?.message);
    }
};