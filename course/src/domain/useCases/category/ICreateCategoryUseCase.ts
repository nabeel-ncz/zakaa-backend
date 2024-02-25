import { CategoryEntity } from "@/domain/entities";

export interface ICreateCategoryUseCase {
    execute(data: CategoryEntity): Promise<CategoryEntity | null>;
}