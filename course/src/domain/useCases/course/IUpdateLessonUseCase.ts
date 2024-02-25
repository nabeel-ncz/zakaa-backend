import { CourseEntity } from "@/domain/entities";

export interface IUpdateLessonUseCase {
    execute(data: {
        courseId: string;
        lessonId: string;
        title: string;
        thumbnail?: string | null;
        description: string;
    }): Promise<CourseEntity | null>;
}