import { Course } from "@/infrastructure/database/mongo/models";
import { CourseEntity } from "@/domain/entities";

export const createCourse = async (
    data: CourseEntity
): Promise<CourseEntity | null> => {
    try {

        const course = await Course.create(data);

        if (!course) {
            throw new Error("Course creation failed!");
        }

        return course;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}