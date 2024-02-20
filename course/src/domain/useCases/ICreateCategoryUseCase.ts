import { CategoryEntity } from "../entities";

export interface ICreateCategoryUseCase {
    execute(data: CategoryEntity): Promise<CategoryEntity | null>;
}