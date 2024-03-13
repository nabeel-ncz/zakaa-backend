import { CourseEntity } from "@/domain/entities";
import { Types } from "mongoose";

export interface IAddLessonUseCase {
    execute(data: {
        courseId: Types.ObjectId | string;
        title: string;
        description: string;
        thumbnail: string;
        video: string;
        attachments?: {
            title: string;
            url: string;
        }
    }): Promise<CourseEntity | null>;
}