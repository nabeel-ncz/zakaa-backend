import { Course } from "../models";

export const getAllCourses = async (
    data: {
        page?: number;
        limit?: number;
        category?: string;
        search?: string;
    }
) => {

    try {

        const page = data.page || 1;
        const limit = data.limit || 10;
        const skip = (page - 1) * limit;

        const query = {};

        if (data.category) {
            query['categoryRef'] = data.category;
        }

        if (data.search) {
            const regexParts = data.search.split(/\s+/).map(part => `.*${part}.*`);
            const searchRegex = new RegExp(regexParts.join('|'), 'i');
            query['title'] = { $regex: searchRegex };
        }


        const result = await Course.find(query).skip(skip).limit(limit);

        return result;

    } catch (error: any) {
        throw new Error(error?.message || "Course retrievel failed");
    }
}