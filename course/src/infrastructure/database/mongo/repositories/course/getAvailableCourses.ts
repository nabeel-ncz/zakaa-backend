import { Course } from "../../models";

export const getAvailableCourses = async (data: {
    search: string,
    page: string | number,
    limit: string | number,
    type: string,
    category: string,
    priceFrom: number | string,
    priceTo: number | string
}) => {
    try {

        const searchTerm = data.search;
        const regexParts = searchTerm.split(/\s+/).map(part => `.*${part}.*`);
        const searchRegex = new RegExp(regexParts.join('|'), 'i');
        let filter = {
            isBlocked: false,
            isPublished: true
        };

        if (searchTerm && searchTerm !== "") {
            filter['$or'] = [
                { title: { $regex: searchRegex } },
                { description: { $regex: searchRegex } }
            ];
        };

        if (data.category) {
            filter['categoryRef'] = data.category;
        };

        if (data.type) {
            filter['pricing.type'] = { $eq: data.type };
        };

        if (data.type === "paid") {
            filter['pricing.amount'] = { $gte: data.priceFrom, $lte: data.priceTo };
        };

        const page = Number(data.page) || 1;
        const limit = Number(data.limit) || 5;
        const skip = (page - 1) * limit;

        const result = await Course.find(filter)
            .populate(["instructorRef", "categoryRef"])
            .sort({updatedAt: 'descending'})
            .skip(skip)
            .limit(limit);

        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Courses retrievel failed");
    }
}
