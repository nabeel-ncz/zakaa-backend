import { CategoryEntity } from "../entities";

export interface IUpdateCategoryUseCase {
    execute(data: CategoryEntity): Promise<CategoryEntity | null>;
}