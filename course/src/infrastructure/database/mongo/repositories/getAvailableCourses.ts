import { Course } from "../models";

export const getAvailableCourses = async () => {
    try {
        const result = await Course.find({ 
            isBlocked: false,
            isPublished: true
        }).populate(["instructorRef", "categoryRef"]);
        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Courses retrievel failed");
    }
}
