import { CategoryEntity } from "@/domain/entities";

export interface IUpdateCategoryUseCase {
    execute(data: CategoryEntity): Promise<CategoryEntity | null>;
}