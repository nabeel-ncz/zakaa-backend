import { Course } from "../models";

export const getCourseById = async (
    id: string
) => {
    try {
        const result = await Course.findById(id).populate(["instructorRef", "categoryRef"]);
        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Course retrievel failed");
    }
}