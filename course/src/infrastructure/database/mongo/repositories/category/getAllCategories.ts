import { Category } from "../../models";

export const getAllCategories = async () => {
    try {
        const result = await Category.find({});
        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Categories retrievel failed");
    }
}
