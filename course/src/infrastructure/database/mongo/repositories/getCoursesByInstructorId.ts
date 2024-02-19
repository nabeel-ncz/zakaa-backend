import { Course } from "../models";

export const getCoursesByInstructorId = async (
    id: string
) => {
    try {
        const result = await Course.find({instructorRef: id});
        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Course retrievel failed");
    }
}
