import { CategoryEntity } from "../entities";

export interface IGetAvailableCategoriesUseCase {
    execute(): Promise<CategoryEntity[] | null>;
}