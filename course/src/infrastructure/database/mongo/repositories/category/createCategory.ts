import { Category } from "@/infrastructure/database/mongo/models";
import { CategoryEntity } from "@/domain/entities";

export const createCategory = async (
    data: CategoryEntity
): Promise<CategoryEntity | null> => {
    try {

        const category = await Category.create(data);

        if (!category) {
            throw new Error("Category creation failed!");
        }

        return category;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}