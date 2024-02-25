import { Course } from "@/infrastructure/database/mongo/models";
import { CourseEntity } from "@/domain/entities";

export const updateCourse = async (
    data: CourseEntity
): Promise<CourseEntity | null> => {
    try {

        const { _id, ...updation } = data;

        const course = await Course.findByIdAndUpdate({
            _id: _id
        }, updation, {
            new: true
        });

        if (!course) {
            throw new Error("Course updation failed!");
        }

        return course;

    } catch (error: any) {
        throw new Error(error?.message);
    }
};