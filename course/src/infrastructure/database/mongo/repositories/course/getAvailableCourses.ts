import { Course } from "../../models";

export const getAvailableCourses = async (data: {
    page: string | number,
    limit: string | number
}) => {
    try {

        const page = Number(data.page) || 1;
        const limit = Number(data.limit) || 5;
        const skip = (page - 1) * limit;

        const result = await Course
            .find({
                isBlocked: false,
                isPublished: true
            })
            .populate(["instructorRef", "categoryRef"])
            .sort({ updatedAt: 'descending' })
            .skip(skip)
            .limit(limit);

        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Courses retrievel failed");
    }
}
