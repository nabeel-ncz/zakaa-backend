import { CategoryEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const createCategoryUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createCategory }
    } = dependencies;

    return {
        execute: async (data: CategoryEntity) => {
            return await createCategory(data);
        }
    }
};