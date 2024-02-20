import { CategoryEntity } from "../entities";

export interface IGetAllCategoriesUseCase {
    execute(): Promise<CategoryEntity[] | null>;
}