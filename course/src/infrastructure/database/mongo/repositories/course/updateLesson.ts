import { Course } from "@/infrastructure/database/mongo/models";
import { CourseEntity } from "@/domain/entities";

export const updateLesson = async (
    data: any
): Promise<CourseEntity | null> => {
    try {

        const { courseId, lessonId, ...rest } = data;

        const updations = {
            $set: {
                'lessons.$[lesson].title': rest.title,
                'lessons.$[lesson].description': rest.description
            }
        }
        
        if (rest?.thumbnail) {
            updations.$set['lessons.$[lesson].thumbnail'] = rest.thumbnail;
        }

        const course = await Course.findByIdAndUpdate({
            _id: courseId
        }, updations, {
            arrayFilters: [{ 'lesson._id': lessonId }],
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